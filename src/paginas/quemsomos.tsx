// Importes do React
// Importes do Router-Dom (se necessário)
// Importes de Icones e Outros
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// Importes de CSS
import "../estilo/quemsomos.css";
// Importes de Paginas
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";

// Dados dos membros da equipe
const membros = [
  {
    nome: "Lucas Lima",
    cargo: "Desenvolvedor FullStack | Designer | ADS",
    imagem: "/img/equipe/lucas.png",
    linkedin: "https://www.linkedin.com/in/lucaslimna/",
    github: "https://www.linkedin.com/in/lucaslimna/",
  },
  {
    nome: "Luiz Gustavo",
    cargo: "Desenvolvedor FullStack | ADS  ",
    imagem:
      "https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus.png",
    linkedin: "#",
    github: "https://github.com/LGustavoDev",
  },
  {
    nome: "Matheus Mariano",
    cargo: "Desenvolvedor FullStack",
    imagem: "/img/equipe/Matheus.png",
    linkedin: "https://www.linkedin.com/in/matheus-mariano-59262027a/",
    github: "https://github.com/Mdellen39",
  },
  {
    nome: "Vitor Mortari",
    cargo: "Desenvolvedor FullStack | Sistemas de Informação",
    imagem: "/img/equipe/Mortari.png",
    linkedin: "https://www.linkedin.com/in/vitor-mortari-a3a5011a7/",
    github: "https://github.com/Mortari03",
  },
  {
    nome: "Vitor Aluisio",
    cargo: "Desenvolvedor FullStack | Sistemas de Informação",
    imagem: "/img/equipe/vitor.png",
    linkedin: "https://www.linkedin.com/in/vitoraluisio20",
    github: "https://github.com/VitorAluisio",
  },
];

function Quemsomos() {
  return (
    <div>
      <Cabecalho />

      <div className='qs_sobre_titulo'>
        <h1>
          Sobre o <span className='texto_alternativo_azul'>Trampos Fácil</span>
        </h1>
      </div>

      <div className='qs_container_principal'>
        <div className='qs_texto_bemvindos'>
          <p>
            Bem-vindo ao{" "}
            <strong className='texto_alternativo_ciano'> Trampos Fácil!</strong> Somos uma
            equipe de estudantes do curso de Desenvolvimento Full Stack do{" "}
            <strong className='texto_alternativo_senac'>Senac Bauru</strong>, unindo
            esforços para criar uma plataforma inovadora que facilita a busca por empregos
            na nossa cidade. Nosso objetivo é conectar candidatos a oportunidades de
            trabalho de forma eficiente e segura.
          </p>
        </div>
        <div className='qs_imagem_sobrenos'></div>
      </div>

      <div className='qs_mv_princial'>
        <div className='qs_item_missao'>
          <div className='qs_imagem_missao'></div>
          <div className='qs_titulo_mv'>
            <h2 className='texto_alternativo_azul'>Nossa Missão</h2>
          </div>
          <div className='qs_texto_mv'>
            <p>
              Facilitar o acesso a oportunidades de emprego para os cidadãos, promovendo
              uma experiência intuitiva e segura tanto para os candidatos quanto para as
              empresas.
            </p>
          </div>
        </div>
        <div className='qs_item_visao'>
          <div className='qs_imagem_visao'></div>
          <div className='qs_titulo_mv'>
            <h2 className='texto_alternativo_azul'>Nossa Visão</h2>
          </div>
          <div className='qs_texto_mv'>
            <p>
              Ser a principal plataforma de busca de emprego em Bauru, reconhecida pela
              sua eficácia e impacto positivo na comunidade.
            </p>
          </div>
        </div>
      </div>

      <div className='qs_titulo_valores'>
        <h1>
          Nossos <span className='texto_alternativo_azul'>Valores</span>
        </h1>
      </div>

      <div className='qs_valores_container'>
        <div className='qs_item_valorespadrao'>
          <div className='qs_imagem_inovacao'></div>
          <div className='qs_titulo_valorespadrao'>
            <h3 className='texto_alternativo_ciano'>Inovação</h3>
          </div>
          <div className='qs_texto_valorespadrao'>
            <p>Buscamos constantemente melhorias e soluções criativas.</p>
          </div>
        </div>

        <div className='qs_item_valorespadrao'>
          <div className='qs_imagem_transparencia'></div>
          <div className='qs_titulo_valorespadrao'>
            <h3 className='texto_alternativo_ciano'>Transparência</h3>
          </div>
          <div className='qs_texto_valorespadrao'>
            <p>Valorizamos a honestidade e a clareza em todas as interações.</p>
          </div>
        </div>

        <div className='qs_item_valorespadrao'>
          <div className='qs_imagem_compromisso'></div>
          <div className='qs_titulo_valorespadrao'>
            <h3 className='texto_alternativo_ciano'>Inclusão</h3>
          </div>
          <div className='qs_texto_valorespadrao'>
            <p>Acreditamos que todos merecem acesso a oportunidades justas</p>
          </div>
        </div>
      </div>

      <div className='qs_titulo_equipe'>
        <h1>
          Conheça a <span className='texto_alternativo_azul'>Equipe</span>
        </h1>
      </div>

      <div className='qs_equipe_container'>
        <Grid
          container
          spacing={3}
          justifyContent='center'
        >
          {membros.map((membro) => (
            <Grid
              item
              xs={12}
              sm={2}
              md={4}
              key={membro.nome}
            >
              <Card className='qs_card'>
                <CardMedia
                  component='img'
                  height='300'
                  image={membro.imagem}
                  alt={membro.nome}
                  className='qs_card_imagem'
                />
                <CardContent className='qs_card_conteudo'>
                  <Typography variant='h4'>{membro.nome}</Typography>
                  <Typography variant='body1'>{membro.cargo}</Typography>
                  <div className='qs_card_links'>
                    <a
                      href={membro.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='qs_link'
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href={membro.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='qs_link'
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

      <div className='qs_titulo_impacto'>
        <h1>
          Impacto <span className='texto_alternativo_azul'>Esperado</span>
        </h1>
      </div>

      <div className='qs_texto_impacto'>
        <p>
          O <strong className='texto_alternativo_ciano'>Trampos Fácil</strong> tem o
          potencial de revolucionar a forma como os bauruenses encontram emprego,
          contribuindo para a redução do desemprego local e promovendo o desenvolvimento
          econômico da região.
        </p>
      </div>

      <Rodape />
    </div>
  );
}

export default Quemsomos;
