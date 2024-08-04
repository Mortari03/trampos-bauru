import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../estilo/politicadeprivacidade.css";
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";

const PoliticaDePrivacidade: React.FC = () => {
  return (
    <div>
      <Cabecalho />
      <Container className="politica_container">
        <Typography variant="h1" className="politica_titulo">
          Política de Privacidade do Trampos Fácil
        </Typography>

        <Typography variant="body1" className="politica_texto">
          Esta Política de Privacidade descreve como o Trampos Fácil coleta, usa
          e protege suas informações pessoais quando você utiliza nosso site e
          serviços. A sua privacidade é importante para nós e estamos
          comprometidos em proteger suas informações.
        </Typography>

        <Section title="Coleta de Informações">
          <Typography variant="body1" className="politica_texto">
            Coletamos informações que você nos fornece diretamente, como nome,
            e-mail e dados de contato. Também coletamos informações
            automaticamente, como endereço IP e dados sobre seu navegador, para
            melhorar sua experiência.
          </Typography>
        </Section>

        <Section title="Uso das Informações">
          <Typography variant="body1" className="politica_texto">
            Utilizamos suas informações para:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Melhorar nossos serviços" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comunicar sobre atualizações e promoções" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Personalizar sua experiência no site" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Realizar análises e pesquisas para entender melhor nossas operações" />
            </ListItem>
          </List>
        </Section>

        <Section title="Compartilhamento de Informações">
          <Typography variant="body1" className="politica_texto">
            Não vendemos suas informações pessoais. Podemos compartilhar suas
            informações com parceiros confiáveis que ajudam a operar nosso site,
            desde que concordem em manter essas informações confidenciais.
            Também podemos compartilhar dados quando exigido por lei.
          </Typography>
        </Section>

        <Section title="Segurança">
          <Typography variant="body1" className="politica_texto">
            Implementamos medidas de segurança para proteger suas informações
            contra acesso não autorizado. No entanto, nenhuma transmissão de
            dados pela internet é completamente segura.
          </Typography>
        </Section>

        <Section title="Seus Direitos">
          <Typography variant="body1" className="politica_texto">
            Você tem o direito de acessar, corrigir e excluir suas informações
            pessoais. Para exercer esses direitos, entre em contato conosco
            através dos meios fornecidos abaixo.
          </Typography>
        </Section>

        <Section title="Alterações na Política">
          <Typography variant="body1" className="politica_texto">
            Podemos atualizar esta Política de Privacidade periodicamente. As
            alterações serão publicadas nesta página, e recomendamos que você
            revise esta política regularmente.
          </Typography>
        </Section>

        <Section title="Contato">
          <Typography variant="body1" className="politica_texto">
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em
            contato pelo e-mail:{" "}
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
    <Typography variant="h4" className="politica_subtitulo">
      {title}
    </Typography>
    {children}
  </Box>
);

export default PoliticaDePrivacidade;
