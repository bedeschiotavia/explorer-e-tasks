import { CheckCircle, Folder, House, Note, PlusSquare, SignOut } from "@phosphor-icons/react";

import { Button, Container, Footer, Header, Nav, Title } from "./styles";

export function SideMenu() {
  return (
    <Container>
      <Header>
        <Title><CheckCircle /> e-Tasks</Title>
      </Header>

      <Nav>
        <a href="#" data-menu-active="true"><House /> Home</a>
        <a href="#"><PlusSquare /> Nova tarefa</a>
        <a href="#"><Folder /> Projetos</a>
        <a href="#"><Note /> Relatórios</a>
      </Nav>

      <Footer>
        <img src="https://github.com/bedeschiotavia.png" alt="Foto do usuário" />
        <div>
          <strong>Otávia Bedeschi</strong>
          <small>otavia@email.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  );
}