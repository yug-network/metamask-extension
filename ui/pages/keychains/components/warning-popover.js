import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { TYPOGRAPHY } from '../../../helpers/constants/design-system';
import Box from '../../../components/ui/box';
import Button from '../../../components/ui/button';
import { useI18nContext } from '../../../hooks/useI18nContext';
import Typography from '../../../components/ui/typography';
import Popover from '../../../components/ui/popover';

export default function WarningPopover({ onClose }) {
  const t = useI18nContext();
  const popoverRef = useRef();

  return (
    <Popover
      className="whats-new-popup__popover"
      title={t('secretRecoveryPhrasePopoverTitle')}
      onClose={onClose}
      popoverRef={popoverRef}
    >
      <Box padding={[0, 6, 6, 6]}>
        <Typography
          className="page-container__subtitle"
          variant={TYPOGRAPHY.H6}
          fontWeight={400}
          boxProps={{ padding: 0, marginBottom: 3 }}
        >
          {t('secretRecoveryPhrasePopoverDescription', [
            <b key="popover_bold">
              {t('secretRecoveryPhrasePopoverDescriptionBold')}
            </b>,
          ])}
        </Typography>
        <Typography
          className="page-container__subtitle"
          variant={TYPOGRAPHY.H6}
          fontWeight={400}
          boxProps={{ padding: 0 }}
        >
          {t('secretRecoveryPhrasePopoverDontShareDescription', [
            <b key="dont_share_bold">
              {t('secretRecoveryPhrasePopoverDontShareBold')}
            </b>,
            <Button
              key="secret_recovery_phrase_link"
              type="link"
              href="https://metamask.zendesk.com/hc/en-us/articles/4404722782107-User-guide-Secret-Recovery-Phrase-password-and-private-keys"
              rel="noopener noreferrer"
              target="_blank"
              className="settings-page__inline-link"
            >
              {t('secretRecoveryPhrasePopoverDontShareLink')}
            </Button>,
          ])}
        </Typography>
        <Button
          key="hold_to_reveal_button"
          rel="noopener noreferrer"
          target="_blank"
          className="settings-page__inline-link"
          onClick={onClose}
        >
          Hold to reveal
        </Button>
      </Box>
    </Popover>
  );
}

WarningPopover.propTypes = {
  onClose: PropTypes.func.isRequired,
};
