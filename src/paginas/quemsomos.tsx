import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../estilo/quemsomos.css";
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";

// Dados dos membros da equipe
const membros = [
  {
    nome: "Lucas Lima",
    cargo: "UX|UI Designer | Desenvolvedor FullStack",
    imagem:
      "https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus.png",
    linkedin: "https://www.linkedin.com/in/lucaslima",
    github: "https://github.com/lucaslima",
  },
  {
    nome: "Luiz Gustavo",
    cargo: "Desenvolvedor FullStack",
    imagem:
      "https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus.png",
    linkedin: "https://www.linkedin.com/in/luizgustavo",
    github: "https://github.com/luizgustavo",
  },
  {
    nome: "Matheus",
    cargo: "Desenvolvedor FullStack",
    imagem:
      "https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus.png",
    linkedin: "https://www.linkedin.com/in/matheus",
    github: "https://github.com/matheus",
  },
  {
    nome: "Vitor Mortari",
    cargo: "Desenvolvedor FullStack",
    imagem:
      "https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus.png",
    linkedin: "https://www.linkedin.com/in/vitormortari",
    github: "https://github.com/vitormortari",
  },
  {
    nome: "Vitor",
    cargo: "Desenvolvedor FullStack",
    imagem:
      "https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus.png",
    linkedin: "https://www.linkedin.com/in/vitor",
    github: "https://github.com/vitor",
  },
];

function Quemsomos() {
  return (
    <div>
      <Cabecalho />

      <div className="qs_sobre_titulo">
        <h1>
          Sobre o <span className="texto_alternativo_azul">Trampos Fácil</span>
        </h1>
      </div>

      <div className="qs_container1">
        <div className="qs_texto_bemvindos">
          <p>
            Bem-vindo ao Trampos Fácil! Somos uma equipe de estudantes do curso
            de Desenvolvimento Full Stack do Senac Bauru, unindo esforços para
            criar uma plataforma inovadora que facilita a busca por empregos na
            nossa cidade. Nosso objetivo é conectar candidatos a oportunidades
            de trabalho de forma eficiente e segura.
          </p>
        </div>
        <div className="qs_imagem_sobrenos"></div>
      </div>

      <div className="qs_container2">
        <div className="qs_container2_item">
          <div className="qs_imagem_container2"></div>
          <div className="qs_missao_container2">
            <h2 className="texto_alternativo_azul">Nossa Missão</h2>
          </div>
          <div className="qs_texto_container2">
            <p>
              Facilitar o acesso a oportunidades de emprego para os cidadãos,
              promovendo uma experiência intuitiva e segura tanto para os
              candidatos quanto para as empresas.
            </p>
          </div>
        </div>

        <div className="qs_container2_item">
          <div className="qs_imagem_container2"></div>
          <div className="qs_visao_container2">
            <h2 className="texto_alternativo_azul">Nossa Visão</h2>
          </div>
          <div className="qs_texto_container2">
            <p>
              Ser a principal plataforma de busca de emprego em Bauru,
              reconhecida pela sua eficácia e impacto positivo na comunidade.
            </p>
          </div>
        </div>
      </div>

      <div className="qs_titulo_valores">
        <h1>
          Nossos <span className="texto_alternativo_azul">Valores</span>
        </h1>
      </div>

      <div className="qs_container3">
        <div className="qs_container3_item">
          <div className="qs_imagem_container3"></div>
          <div className="qs_missao_container3">
            <h3 className="texto_alternativo_ciano">Inovação</h3>
          </div>
          <div className="qs_texto_container3">
            <p>Buscamos constantemente melhorias e soluções criativas.</p>
          </div>
        </div>

        <div className="qs_container3_item">
          <div className="qs_imagem_container3"></div>
          <div className="qs_missao_container3">
            <h3 className="texto_alternativo_ciano">Transparência</h3>
          </div>
          <div className="qs_texto_container3">
            <p>Valorizamos a honestidade e a clareza em todas as interações.</p>
          </div>
        </div>

        <div className="qs_container3_item">
          <div className="qs_imagem_container3"></div>
          <div className="qs_missao_container3">
            <h3 className="texto_alternativo_ciano">Compromisso</h3>
          </div>
          <div className="qs_texto_container3">
            <p>Estamos dedicados ao sucesso e satisfação de nossos usuários.</p>
          </div>
        </div>
      </div>

      <div className="qs_titulo_equipe">
        <h1>
          Conheça a <span className="texto_alternativo_azul">Equipe</span>
        </h1>
      </div>

      <div className="qs_equipe_container">
        <Grid container spacing={3} justifyContent="center">
          {membros.map((membro) => (
            <Grid item xs={12} sm={6} md={4} key={membro.nome}>
              <Card className="qs_card">
                <CardMedia
                  component="img"
                  height="140"
                  image={membro.imagem}
                  alt={membro.nome}
                  className="qs_card_imagem"
                />
                <CardContent className="qs_card_conteudo">
                  <Typography variant="h4">{membro.nome}</Typography>
                  <Typography variant="body1">{membro.cargo}</Typography>
                  <div className="qs_card_links">
                    <a
                      href={membro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="qs_link"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href={membro.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="qs_link"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="qs_titulo_impacto">
        <h1>
          Impacto <span className="texto_alternativo_azul">Esperado</span>
        </h1>
      </div>

      <div className="qs_texto_impacto">
        <p>
          O Trampos Fácil tem o potencial de revolucionar a forma como os
          bauruenses encontram emprego, contribuindo para a redução do
          desemprego local e promovendo o desenvolvimento econômico da região.
        </p>
      </div>

      <Rodape />
    </div>
  );
}

export default Quemsomos;
