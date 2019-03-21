import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  Footer as Foot,
  Container,
  Content,
  Columns,
  Column
} from "bloomer";

function Footer(props) {
  return (
    <Foot id="footer">
      <Container>
        <Content>
          <Columns>
            <Column>
              <p>
                Made with <FontAwesomeIcon icon={faCoffee} /> by Tucker Beauchamp
              </p>
            </Column>
          </Columns>
          <Content isSize="small">
            <p>
              The source code is licensed under MIT.
            </p>
            <p>
              The website content is licensed under{" "}
              CC ANS 4.0.
            </p>
          </Content>
        </Content>
      </Container>
    </Foot>
  );
}

export default Footer;
