import React, { PropTypes } from 'react';
import importcss from 'importcss';
import { inject } from 'mobx-react';
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
} from 'reactstrap';
import {
  Grid,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import Component from 'lsk-general/General/Component';
import Slide from '../Slide';
import Link from 'lsk-general/General/Link';
import A from 'lsk-general/General/A';

import PostList from '../../../App/components/PostList';

@inject('auth', 'config')
@importcss(require('./HomePage.css'))
export default class HomePage extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
  }
  render() {
    const { site } = this.props.config;
    const { auth } = this.props;
    return (
      <div>
        <If condition={auth.isAuth()}>
          <h1 style={{color: 'red', fontWeight: 'bold'}}>You are entered!</h1>
          <Grid>
            <Row>
              <Col md={4}>
                <Card>
                  <CardBlock>
                    <CardTitle>
                      Hello, XXI Century World!
                    </CardTitle>
                    Это пример, как можно использовать lego-starter-kit
                  </CardBlock>
                  <CardFooter className="text-xs-center">
                    <A href="https://github.com/makushatnik/skb-react">
                      Страница разработчика
                    </A>
                  </CardFooter>
                </Card>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quo obcaecati, eveniet natus nam molestiae amet laboriosam, doloremque mollitia minus quidem consectetur, aliquid porro quam! Culpa numquam nesciunt dolorem vel.
                </p>
              </Col>
              <Col md={8}>
                <PostList pageSize="20" pageNum="1" />
              </Col>
            </Row>
          </Grid>
        </If>
        <If condition={!auth.isAuth()}>
          <Slide
            center
            video={false}
            image={false}
            overlay={false}
          >
            <h1>{site.title}</h1>
            <h2>{site.description}</h2>
            <div style={{ marginTop: 30 }}>
              <Button componentClass={Link} href="/cabinet" bsSize="large">Войти</Button>
            </div>
          </Slide>
        </If>
      </div>
    );
  }
}
