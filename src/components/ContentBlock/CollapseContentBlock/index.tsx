import  { Row, Col, Collapse } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  CollapseContentBlock,
  Content,
  ContentWrapper,
} from "./styles";

const { Panel } = Collapse;

const CollapseBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id
}: ContentBlockProps) => {
  return (
    <CollapseContentBlock>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
              <span style={{color: "#18216d", fontSize:32, fontWeight:"bold", fontFamily: 'Motiva Sans Bold'}}>{t(title)}</span>
          <Col lg={24} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <Collapse accordion>
                {
                  content?.map((panel:any , index:number) => {
                    return (
                      <Panel key={index} header={panel.label}>
                        <p>
                          
                        </p>
                      </Panel>
                    )
                  })
                }
              </Collapse>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </CollapseContentBlock>
  );
};

export default withTranslation()(CollapseBlock);
