import classes from './HelpPage.module.css';
import BgWrapper from '../components/layout/BgWrapper';
import Title from '../components/layout/Title';
import { useState } from 'react';
import { TERMS_OF_USE } from '../utils/terms-of-use';
import { PRIVACY_POLICY } from '../utils/privacy-policy';

const HelpPage = () => {
  const [activeTopic, setActiveTopic] = useState('terms-of-use');

  return (
    <>
      <BgWrapper />
      <div className={classes.content_wrapper}>
        <div className={classes.section_title}>
          <Title>Help</Title>
        </div>
        <div className={classes.help_window}>
          <div className={classes.menu}>
            <ul>
              <li>
                <button
                  className={
                    activeTopic === 'terms-of-use' ? classes.active : ''
                  }
                  onClick={() => setActiveTopic('terms-of-use')}
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTopic === 'privacy-policy' ? classes.active : ''
                  }
                  onClick={() => setActiveTopic('privacy-policy')}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  className={activeTopic === 'database' ? classes.active : ''}
                  onClick={() => setActiveTopic('database')}
                >
                  Database
                </button>
              </li>
              <li>
                <button
                  className={activeTopic === 'faq' ? classes.active : ''}
                  onClick={() => setActiveTopic('faq')}
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          <div className={classes.content}>
            <div
              className={`${classes.help_section} ${
                activeTopic === 'terms-of-use' ? classes.active : ''
              }`}
            >
              {TERMS_OF_USE.map((term) => (
                <div>
                  <h3>{term.title}</h3>
                  <p>
                    {term.rules.map((rule) => (
                      <span>{rule}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={`${classes.help_section} ${
                activeTopic === 'privacy-policy' ? classes.active : ''
              }`}
            >
              {PRIVACY_POLICY.map((policy) => (
                <div>
                  <h3>{policy.title}</h3>
                  <p>
                    {policy.rules.map((rule) => (
                      <span>{rule}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={`${classes.help_section} ${
                activeTopic === 'database' ? classes.active : ''
              }`}
            >
              <p>Database</p>
            </div>
            <div
              className={`${classes.help_section} ${
                activeTopic === 'faq' ? classes.active : ''
              }`}
            >
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
