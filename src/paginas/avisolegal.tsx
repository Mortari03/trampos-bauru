import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../estilo/avisolegal.css"; // Certifique-se de criar este arquivo CSS
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";
import { url } from "inspector";

const AvisoLegal: React.FC = () => {
  return (
    <div>
      <Cabecalho />
      <Container className="aviso_container">
        <Typography variant="h1" className="aviso_titulo">
          Aviso Legal para Candidatos do Trampos Fácil
        </Typography>

        <Typography variant="body1" className="aviso_texto">
          Este documento estabelece as Condições Gerais de Uso do portal Trampos
          Fácil
          <a
            href="https://www.tramposfacil.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            (https://www.tramposfacil.com.br)
          </a>
          e todos os websites pertencentes à Trampos Fácil Ltda. (doravante
          denominada “Trampos Fácil”).
        </Typography>

        <Section title="Sumário">
          <List>
            <ListItem>
              <ListItemText primary="Aviso Legal para Candidatos" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Obrigações dos Usuários no Portal" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Publicação do Conteúdo no Portal" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Condições Legais para Candidatos" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Informação de Contato" />
            </ListItem>
          </List>
        </Section>

        <Section title="Aviso Legal para Candidatos">
          <Typography variant="body1" className="aviso_texto">
            A finalidade do Trampos Fácil é disponibilizar uma plataforma que
            conecta Recrutadores e Candidatos em um ambiente online. O portal
            permite que as empresas registradas:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Acessem a base de dados de Candidatos registrados." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Publiquem vagas de emprego." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Gerenciem o processo de seleção de candidatos." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Utilizem outros serviços relacionados à otimização de candidaturas e recrutamento." />
            </ListItem>
          </List>
          <Typography variant="body1" className="aviso_texto">
            O Trampos Fácil se reserva o direito de modificar as Condições
            Gerais de Uso a qualquer momento, sem aviso prévio.
          </Typography>
        </Section>

        <Section title="Obrigações dos Usuários">
          <Typography variant="body1" className="aviso_texto">
            O Usuário concorda em:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Utilizar o Portal de forma diligente e apenas para os fins a que se destinam." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Respeitar os direitos de terceiros ao usar os serviços do Portal." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Não reproduzir, distribuir ou modificar o conteúdo do Portal sem autorização." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Manter atualizadas suas informações no Portal." />
            </ListItem>
          </List>
        </Section>

        <Section title="Publicação do Conteúdo no Portal">
          <Typography variant="body1" className="aviso_texto">
            O Usuário é o único responsável pelo Conteúdo que publica no Portal,
            garantindo que possui os direitos necessários para utilizar o
            Conteúdo.
          </Typography>
        </Section>

        <Section title="Condições Legais para Candidatos">
          <Typography variant="body1" className="aviso_texto">
            O Usuário deve ter 14 anos ou mais para acessar o Portal. A
            utilização de certos serviços pode estar sujeita a condições
            particulares, que devem ser lidas e aceitas antes do uso.
          </Typography>
        </Section>

        <Section title="Informação de Contato">
          <Typography variant="body1" className="aviso_texto">
            Para dúvidas ou mais informações, entre em contato conosco pelo
            e-mail:{" "}
            <a href="mailto:contato@tramposfacil.com.br">
              contato@tramposfacil.com.br
            </a>
            .
          </Typography>
        </Section>
      </Container>
      <Rodape />
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box mt={4}>
    <Typography variant="h4" className="aviso_subtitulo">
      {title}
    </Typography>
    {children}
  </Box>
);

export default AvisoLegal;
