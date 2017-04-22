import React, { PropTypes } from 'react';
import importcss from 'importcss';
import { inject } from 'mobx-react';
import { Button } from 'react-bootstrap';

import Component from 'lsk-general/General/Component';
import Slide from '../Slide';
import Link from 'lsk-general/General/Link';

@inject('config')
@importcss(require('./HomePage.css'))
export default class HomePage extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
  }
  render() {
    const { site } = this.props.config;
    return (
      <div>
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
      </div>
    );
  }
}
