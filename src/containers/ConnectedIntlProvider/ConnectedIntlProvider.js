
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages_de from "../../translations/de.json";
import messages_en from "../../translations/en.json";

const messages = {
    'de': messages_de,
    'en': messages_en
};
class ConnectedIntlProvider extends PureComponent {
  constructor(){
    super()
  }
  render() {
    const { language } = this.props
    return(
      <IntlProvider locale={language} messages={messages[language]}>
        {this.props.children}
      </IntlProvider>
    )
  }
}

function mapStateToProps(state) {
  const { language } = state.header;
  return { language };
}

export default connect(mapStateToProps)(ConnectedIntlProvider);