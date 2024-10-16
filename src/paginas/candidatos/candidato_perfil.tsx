import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faFilePdf,
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faBookOpen,
  faProjectDiagram,
  faLightbulb,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import "../../estilo/candidato_perfil.css";
import { useUsuario } from "../../contexts/UsuarioContext";
import { Usuario } from "../../types/interfaces";

function CandidatoPerfil() {
  const { userInfo, setUserInfo } = useUsuario();
  const [editMode, setEditMode] = useState(false);
  const [fotoPreview, setFotoPreview] = useState(userInfo.foto);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof Omit<
      Usuario,
      | "educacao"
      | "habilidades"
      | "certificacoes"
      | "cursos"
      | "projetos"
      | "areasInteresse"
      | "curriculo"
    >
  ) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => {
      const updatedSection = {
        ...(prevInfo[section] as object),
        [name]: value,
      };
      return { ...prevInfo, [section]: updatedSection as any };
    });
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    section: keyof Pick<
      Usuario,
      "habilidades" | "certificacoes" | "cursos" | "projetos" | "areasInteresse"
    >
  ) => {
    const { value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [section]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    // Implementar a lógica para salvar as alterações
  };

  return (
    <div className='perfil-usuario'>
      <div className='perfil-header'>
        <img
          src={fotoPreview}
          alt='Foto de Perfil'
          className='foto-perfil'
        />
        <div className='perfil-header-content'>
          <h2>{userInfo.nome}</h2>
          <p>{userInfo.bio}</p>
        </div>
        <button
          onClick={handleEditClick}
          className='edit-button'
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>

      {editMode ? (
        <form
          onSubmit={handleSubmit}
          className='perfil-form'
        >
          <label>
            Nome Completo:
            <input
              type='text'
              name='nome'
              value={userInfo.nome}
              onChange={handleChange}
            />
          </label>
          <label>
            Bio:
            <textarea
              name='bio'
              value={userInfo.bio}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={userInfo.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Telefone:
            <input
              type='text'
              name='telefone'
              value={userInfo.telefone}
              onChange={handleChange}
            />
          </label>
          <label>
            Endereço:
            <input
              type='text'
              name='endereco'
              value={userInfo.endereco}
              onChange={handleChange}
            />
          </label>
          <label>
            Cidade:
            <input
              type='text'
              name='cidade'
              value={userInfo.cidade}
              onChange={handleChange}
            />
          </label>
          <label>
            Estado:
            <input
              type='text'
              name='estado'
              value={userInfo.estado}
              onChange={handleChange}
            />
          </label>
          <label>
            CEP:
            <input
              type='text'
              name='cep'
              value={userInfo.cep}
              onChange={handleChange}
            />
          </label>
          <label>
            Foto de Perfil:
            <input
              type='file'
              accept='image/*'
              onChange={(e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  const reader = new FileReader();

                  reader.onloadend = () => {
                    setFotoPreview(reader.result as string);
                    setUserInfo((prevInfo) => ({
                      ...prevInfo,
                      foto: reader.result as string,
                    }));
                  };

                  reader.readAsDataURL(file);
                }
              }}
            />
          </label>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faBriefcase} /> Último Emprego
            </h3>
            <label>
              Cargo:
              <input
                type='text'
                name='cargo'
                value={userInfo.ultimoEmprego.cargo}
                onChange={(e) => handleNestedChange(e, "ultimoEmprego")}
              />
            </label>
            <label>
              Empresa:
              <input
                type='text'
                name='empresa'
                value={userInfo.ultimoEmprego.empresa}
                onChange={(e) => handleNestedChange(e, "ultimoEmprego")}
              />
            </label>
            <label>
              Duração:
              <input
                type='text'
                name='duracao'
                value={userInfo.ultimoEmprego.duracao}
                onChange={(e) => handleNestedChange(e, "ultimoEmprego")}
              />
            </label>
            <label>
              Descrição:
              <textarea
                name='descricao'
                value={userInfo.ultimoEmprego.descricao}
                onChange={(e) => handleNestedChange(e, "ultimoEmprego")}
              />
            </label>
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} /> Educação
            </h3>
            {userInfo.educacao.map((edu, index) => (
              <div key={index}>
                <label>
                  Instituição:
                  <input
                    type='text'
                    name='instituicao'
                    value={edu.instituicao}
                    onChange={(e) =>
                      setUserInfo((prevInfo) => {
                        const updatedEducacao = [...prevInfo.educacao];
                        updatedEducacao[index].instituicao = e.target.value;
                        return { ...prevInfo, educacao: updatedEducacao };
                      })
                    }
                  />
                </label>
                <label>
                  Grau:
                  <input
                    type='text'
                    name='grau'
                    value={edu.grau}
                    onChange={(e) =>
                      setUserInfo((prevInfo) => {
                        const updatedEducacao = [...prevInfo.educacao];
                        updatedEducacao[index].grau = e.target.value;
                        return { ...prevInfo, educacao: updatedEducacao };
                      })
                    }
                  />
                </label>
                <label>
                  Data de Conclusão:
                  <input
                    type='text'
                    name='dataConclusao'
                    value={edu.dataConclusao}
                    onChange={(e) =>
                      setUserInfo((prevInfo) => {
                        const updatedEducacao = [...prevInfo.educacao];
                        updatedEducacao[index].dataConclusao = e.target.value;
                        return { ...prevInfo, educacao: updatedEducacao };
                      })
                    }
                  />
                </label>
              </div>
            ))}
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faCertificate} /> Certificações
            </h3>
            <textarea
              name='certificacoes'
              value={userInfo.certificacoes.join(", ")}
              onChange={(e) => handleArrayChange(e, "certificacoes")}
            />
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faBookOpen} /> Cursos
            </h3>
            <textarea
              name='cursos'
              value={userInfo.cursos.join(", ")}
              onChange={(e) => handleArrayChange(e, "cursos")}
            />
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projetos
            </h3>
            <textarea
              name='projetos'
              value={userInfo.projetos.join(", ")}
              onChange={(e) => handleArrayChange(e, "projetos")}
            />
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faLightbulb} /> Áreas de Interesse
            </h3>
            <textarea
              name='areasInteresse'
              value={userInfo.areasInteresse.join(", ")}
              onChange={(e) => handleArrayChange(e, "areasInteresse")}
            />
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faGears} /> Habilidades
            </h3>
            <textarea
              name='habilidades'
              value={userInfo.habilidades.join(", ")}
              onChange={(e) => handleArrayChange(e, "habilidades")}
            />
          </section>

          <button
            type='submit'
            className='save-button'
          >
            <FontAwesomeIcon icon={faSave} /> Salvar
          </button>
        </form>
      ) : (
        <div className='perfil-informacoes'>
          <section className='perfil-section'>
            <h3>Informações Pessoais</h3>
            <p>
              <strong>Nome Completo:</strong> {userInfo.nome}
            </p>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <p>
              <strong>Telefone:</strong> {userInfo.telefone}
            </p>
            <p>
              <strong>Endereço:</strong> {userInfo.endereco}
            </p>
            <p>
              <strong>Cidade:</strong> {userInfo.cidade}
            </p>
            <p>
              <strong>Estado:</strong> {userInfo.estado}
            </p>
            <p>
              <strong>CEP:</strong> {userInfo.cep}
            </p>
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faBriefcase} /> Último Emprego
            </h3>
            <p>
              <strong>Cargo:</strong> {userInfo.ultimoEmprego.cargo}
            </p>
            <p>
              <strong>Empresa:</strong> {userInfo.ultimoEmprego.empresa}
            </p>
            <p>
              <strong>Duração:</strong> {userInfo.ultimoEmprego.duracao}
            </p>
            <p>
              <strong>Descrição:</strong> {userInfo.ultimoEmprego.descricao}
            </p>
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} /> Educação
            </h3>
            {userInfo.educacao.map((edu, index) => (
              <div key={index}>
                <p>
                  <strong>Instituição:</strong> {edu.instituicao}
                </p>
                <p>
                  <strong>Grau:</strong> {edu.grau}
                </p>
                <p>
                  <strong>Data de Conclusão:</strong> {edu.dataConclusao}
                </p>
              </div>
            ))}
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faCertificate} /> Certificações
            </h3>
            <ul>
              {userInfo.certificacoes.map((certificacao, index) => (
                <li key={index}>{certificacao}</li>
              ))}
            </ul>
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faBookOpen} /> Cursos
            </h3>
            <ul>
              {userInfo.cursos.map((curso, index) => (
                <li key={index}>{curso}</li>
              ))}
            </ul>
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projetos
            </h3>
            <ul>
              {userInfo.projetos.map((projeto, index) => (
                <li key={index}>
                  <strong>{projeto.nome}</strong> - {projeto.descricao}
                  {projeto.link && (
                    <div>
                      <a
                        href={projeto.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Ver mais
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faLightbulb} /> Áreas de Interesse
            </h3>
            <ul>
              {userInfo.areasInteresse.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faGears} /> Habilidades
            </h3>
            <ul>
              {userInfo.habilidades.map((habilidade, index) => (
                <li key={index}>{habilidade}</li>
              ))}
            </ul>
          </section>

          <section className='perfil-section'>
            <h3>
              <FontAwesomeIcon icon={faFilePdf} /> Currículo
            </h3>
            {userInfo.curriculo ? (
              <a
                href={userInfo.curriculo.toString()}
                download
              >
                Download Currículo
              </a>
            ) : (
              <p>Nenhum currículo anexado.</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default CandidatoPerfil;
