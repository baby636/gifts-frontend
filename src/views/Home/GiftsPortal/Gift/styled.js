import styled from 'styled-components';
import Popup from 'reactjs-popup';
import {
  Paragraph,
  TimesSolidThick,
} from '@bitcoin-portal/bitcoincom-pkg-components';
import { colors, media } from '@bitcoin-portal/bitcoincom-pkg-theme';
import appIcon from '../../../../../static/images/uploads/appLogoDot.png';
import downloadIcon from '../../../../../static/images/uploads/download.png';
import pdfIcon from '../../../../../static/images/uploads/pdf.png';
import copypaste from '../../../../../static/images/uploads/copypaste.svg';
import emailIcon from '../../../../../static/images/uploads/email.svg';

const gifts = {
  background: colors.solid.zircon,
  palette: {
    text: {
      default: colors.solid.vulcan,
      secondary: colors.solid.vulcanLightest,
      tertiary: colors.solid.ghostLight,
      alert: colors.solid.cinnabar,
      link: colors.solid.caribbeanGreen,
      uxalert: '#d8000c',
    },
    background: {
      default: colors.solid.zircon,
      secondary: colors.solid.zirconDarkest,
      tertiary: colors.solid.white,
      alternate: colors.solid.vulcan,
      contrast: colors.solid.vulcanLight,
      alert: colors.gradient.cinnabar,
      uxalert: '#ffbaba',
    },
    border: {
      default: colors.solid.ghostLight,
      secondary: colors.solid.mystic,
      tertiary: colors.solid.alto,
      contrast: colors.solid.vulcanLightest,
      alert: colors.solid.cinnabar,
      uxalert: '#d8000c',
    },
  },
  spacing: { unit: 8 },
};
export const ShareMenu = styled(Popup)`
  width: 130px;
`;
export const ShareMenuButton = styled.button`
  width: 100%;
  outline: none;
  padding: 12px;
  color: #4d4d4d;
  cursor: pointer;
  background-color: transparent;
  background: url(${downloadIcon}) no-repeat 12px center;
  border: none;
  height: 100%;

  & :hover {
    background-color: #fff;
    color: #000;
  }
`;

export const ShareMenuButtonLink = styled.button`
  width: 100%;
  outline: none;
  padding: 12px;
  color: #4d4d4d;
  cursor: pointer;
  background-color: transparent;
  background: url(${appIcon}) no-repeat 12px center;
  border: none;
  height: 100%;

  & :hover {
    background-color: #fff;
    color: #000;
  }
`;
export const LoadingButton = styled.button`
  width: 100%;
  outline: none;
  padding: 12px;
  color: #4d4d4d;
  cursor: pointer;
  background-color: transparent;

  border: none;
  height: 100%;

  & :hover {
    background-color: #fff;
    color: #000;
  }
`;
export const ShareMenuButtonPDF = styled.button`
  width: 100%;
  outline: none;
  padding: 12px;
  color: #4d4d4d;
  cursor: pointer;
  background-color: transparent;
  background: url(${pdfIcon}) no-repeat 12px center;
  border: none;
  height: 100%;
  & :hover {
    background-color: #fff;
    color: #000;
  }
`;
export const ClaimedCopy = styled.button`
  width: 80px;
  text-align: right;
  float: right;
  z-index: 10;
  outline: none;
  padding: 12px;
  color: #4d4d4d;
  cursor: pointer;
  background-color: transparent;
  background: url(${copypaste}) no-repeat 8px center;
  border: none;
  height: 100%;
`;
export const ShareMenuButtonCopy = styled.button`
  width: 100%;
  z-index: 10;
  outline: none;
  padding: 12px;
  color: #4d4d4d;
  cursor: pointer;
  background-color: transparent;
  background: url(${copypaste}) no-repeat 12px center;
  border: none;
  height: 100%;
  & :hover {
    background-color: #fff;
    color: #000;
  }
`;
export const ShareMenuButtonEmail = styled.button`
  width: 100%;
  z-index: 10;
  outline: none;
  padding: 12px;
  color: #4d4d4d;
  cursor: pointer;
  background-color: transparent;
  background: url(${emailIcon}) no-repeat 12px center;
  border: none;
  height: 100%;
  & :hover {
    background-color: #fff;
    color: #000;
  }
`;
export const ShareMenuList = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
`;
export const ShareMenuListItem = styled.div`
  background: url(${downloadIcon}) no-repeat left center;
  cursor: pointer;

  & :hover {
    background-color: #4d4d4d;
    color: #fff;
  }
`;
export const SnapshotHolder = styled.div`
  background-color: #fff;
  text-align: center;
  border: 2px solid #000;
`;

export const ShareButton = styled.div`
  & :hover {
    background-color: white;
  }
  background-color: transparent;
  cursor: pointer;
  float: right;
  border: 1px solid black;
  margin: 8px 8px 8px 0;
  border-radius: 5px;
`;

export const TipWrapper = styled.div`
  position: relative;

  background-color: white;
  height: auto;
  width: 2.5in;

  align-self: center;
  justify-self: center;

  @media print {
    display: inline-block;
    height: auto;
    page-break-inside: avoid !important;
  }
`;
export const TipBorder = styled.div`
  border: 1px solid black;
`;
export const EmailError = styled.div`
  position: absolute;
  margin: auto;
  padding: 24px;
  bottom: 55px;
  height: 221px;
  width: 188px;
  margin-top: 4px;
  z-index: 5;
  background: ${gifts.palette.background.uxalert};
  & > p {
    color: ${gifts.palette.text.uxalert};
  }
  color: ${gifts.palette.text.uxalert};
  border: 2px solid ${gifts.palette.border.uxalert};
`;

export const PopupEmailForm = styled.form`
  padding: 24px;
  background-color: #f5f5f5;
`;

export const InputError = styled.div`
  color: red;
  font-size: 0.6rem;
  margin-top: 0;
  padding-top: 0;
`;
export const EmailInputWrap = styled.div`
  padding: 4px 12px;
`;
export const InputLabel = styled.div`
  text-align: left;
  margin-bottom: 8px;
  color: ${gifts.palette.text.secondary};
  font-weight: 600;
  font-size: 0.9rem;
`;
export const Red = styled.span`
  color: #f44336;
`;
export const SendEmailButton = styled.button``;
export const StatusWrap = styled.div`
  width: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-top: 4px;
  border: 1px solid black;
  padding: 0px;
  background-color: #f5f5f5;
  overflow: auto;
`;

export const StatusLabel = styled.div`
  font-style: bold;
  color: #000;
  background-color: #a8a8a8;
`;
export const TipStatus = styled.div``;
export const ClaimedBlock = styled.div`
  opacity: ${({ status = 'unclaimed' }) => (status !== 'unclaimed' ? 1 : 0)};
  position: ${({ status = 'unclaimed' }) =>
    status !== 'unclaimed' ? 'relative' : 'absolute'};
  background-color: ${({ status = 'claimed' }) =>
    status === 'unclaimed' ? '#fff;' : '#0fcb97;'};
  border-radius: 5px;
  margin: 24px;
  padding: 31px 0px;
  -webkit-transition: background-color 3s ease-out;
  -moz-transition: background-color 3s ease-out;
  -o-transition: background-color 3s ease-out;
  transition: background-color 3s ease-out;
  -webkit-transition: opacity 3s ease-out;
  -moz-transition: opacity 3s ease-out;
  -o-transition: opacity 3s ease-out;
  transition: opacity 3s ease-out;
`;

export const ClaimedBlockOG = styled.div`
  opacity: ${({ status = 'unclaimed' }) => (status !== 'unclaimed' ? 1 : 0)};
  position: ${({ status = 'unclaimed' }) =>
    status !== 'unclaimed' ? 'relative' : 'absolute'};
  background-color: ${({ status = 'claimed' }) =>
    status === 'unclaimed' ? '#fff;' : '#f59332;'};
  border-radius: 5px;
  margin: 24px;
  padding: 31px 0px;
  -webkit-transition: background-color 3s ease-out;
  -moz-transition: background-color 3s ease-out;
  -o-transition: background-color 3s ease-out;
  transition: background-color 3s ease-out;
  -webkit-transition: opacity 3s ease-out;
  -moz-transition: opacity 3s ease-out;
  -o-transition: opacity 3s ease-out;
  transition: opacity 3s ease-out;
`;

export const ClaimedBlockEZ = styled.div`
  opacity: ${({ status = 'unclaimed' }) => (status !== 'unclaimed' ? 1 : 0)};
  position: ${({ status = 'unclaimed' }) =>
    status !== 'unclaimed' ? 'relative' : 'absolute'};
  background-color: ${({ status = 'claimed' }) =>
    status === 'unclaimed' ? '#fff;' : 'grey;'};
  border-radius: 5px;
  margin: 24px;
  padding: 31px 0px;
  -webkit-transition: background-color 3s ease-out;
  -moz-transition: background-color 3s ease-out;
  -o-transition: background-color 3s ease-out;
  transition: background-color 3s ease-out;
  -webkit-transition: opacity 3s ease-out;
  -moz-transition: opacity 3s ease-out;
  -o-transition: opacity 3s ease-out;
  transition: opacity 3s ease-out;
`;

export const ExpiredBlock = styled.div`
  background-color: #ffbaba;
  border-radius: 5px;
  margin: 24px;
  padding: 39px 0px;
`;
export const ExpiredBlockOG = styled.div`
  background-color: #fff;
  border: 3px solid #f59332;
  border-radius: 5px;
  margin: 24px;
  padding: 39px 0px;
`;
export const ExpiredBlockEZ = styled.div`
  background-color: #fff;
  border: 3px solid grey;
  border-radius: 5px;
  margin: 24px;
  padding: 39px 0px;
`;
export const StatusTable = styled.table`
  max-width: 2.5in;
  margin: auto;
  font-size: 12px;
  float: left;
  padding: 4px;
`;
export const LabelTd = styled.td`
  text-align: right;
`;
export const StatusTd = styled.td`
  text-align: left;
  color: ${({ funded = false }) => (funded === true ? '#0fcb97;' : '#000')};
  font-weight: ${({ funded = false }) => (funded === true ? 'bold;' : 'none')};
  & > a {
    color: ${colors.solid.caribbeanGreen};
  }
`;
export const StatusTdOldschool = styled.td`
  text-align: left;
  color: ${({ funded = false }) => (funded === true ? '#F59332;' : '#000')};
  font-weight: ${({ funded = false }) => (funded === true ? 'bold;' : 'none')};
  & > a {
    color: #f59332;
  }
`;
export const ShareIcon = styled.img`
  padding: 6px 6px 0px 7px;
`;
export const ClaimedSpan = styled.div`
  padding: 65px 20px;
  height: 145px;
`;
export const TipLabel = styled.div`
  font-weight: 700;
`;
export const ScanLabel = styled.div`
  color: #0fcb97;
  font-weight: 700;
  font-style: italic;
  font-size: 15px;
`;
export const TipAmount = styled.div`
  margin-top: 0px;
  padding: 6px 0px 4px;
  text-align: center;
  color: #fff;
  background-color: ${({ oldSchool = false }) =>
    oldSchool === true ? '#F59332;' : '#0fcb97;'};
`;
export const TipAmountThrowback = styled.div`
  margin-top: 0px;
  padding: 6px 0px 4px;
  text-align: center;
  color: #fff;
  background-color: #f59332;
`;
export const TipAmountEZ = styled.div`
  margin-top: 0px;

  padding: 6px 0px 4px;
  text-align: center;
  color: #000;
  background-color: #fff;
`;
export const TipHeader = styled.div`
  margin: 0;
  padding: 10px 10px 0;
  text-align: center;
  > img {
    width: 100%;
  }
`;
export const CryptoAmount = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const FiatAmount = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const Content = styled.div`
  text-align: center;
  margin-bottom: ${gifts.spacing.unit * 8}px;
  margin-top: ${gifts.spacing.unit * 8}px;
  z-index: 2;

  ${media.md`
    margin-bottom: unset;
    margin-top: 0;
    text-align: left;
  `}
`;
export const TipExchangeRate = styled.div`
  padding: 3px 0px;
  text-align: center;
  background-color: ${({ oldSchool = false }) =>
    oldSchool === true ? '#4d4d4d;' : '#006531;'};
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;
export const LogoFooter = styled.div`
  padding: 3px 0px;
  text-align: center;
  background-color: #fff;
  color: #000;
  font-size: 12px;
  font-weight: 600;
`;
export const TipExchangeRateThrowback = styled.div`
  padding: 3px 0px;
  text-align: center;
  background-color: #4d4d4d;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;
export const TipExchangeRateEZ = styled.div`
  padding: 3px 0px;

  text-align: center;
  background-color: #fff;
  color: #000;
  font-size: 12px;
  font-weight: 600;
`;
export const HowToClaimLabel = styled.div`
  font-style: bold;
  font-style: italic;
  font-size: 14px;
  padding: 4px 4px 0px 4px;
`;
export const HowToClaim = styled.div`
  font-size: 13px;
  display: ${({ show = false }) => (show === true ? 'flex' : 'none')};
`;
export const HowToList = styled.ul`
  text-align: left;
  list-style: none;
  padding-left: 4px;
  padding-bottom: 12px;
  margin-bottom: 0px;
  margin-top: 0px;
`;
export const StepOne = styled.li`
  margin: 12px 6px;
`;
export const StepTwo = styled.li`
  margin: 12px 6px;
  display: flex;
  align-items: flex-end;
`;
export const StepThree = styled.li`
  margin: 12px 6px 0px 6px;
`;
export const StepOneOG = styled.li`
  margin: 12px 6px;
`;
export const StepTwoOG = styled.li`
  margin: 12px 6px;
  display: flex;
  align-items: flex-end;
`;
export const StepThreeOG = styled.li`
  margin: 12px 6px 0px 6px;
`;
export const DotComImg = styled.img`
  height: 12px;
`;

export const Text = styled(Paragraph)`
  margin-top: ${gifts.spacing.unit * 2}px;
  margin-bottom: ${gifts.spacing.unit * 4}px;

  ${media.md`
    margin-top: ${gifts.spacing.unit * 3}px;
  `}
`;

export const EmailPopup = styled(Popup)`
  &-content {
    width: 75% !important;
    padding: 0px !important;
    max-width: 600px !important;
    border-radius: 5px !important;
  }
`;
export const EmailCloseIcon = styled(TimesSolidThick)``;
export const EmailPopupCloser = styled.div`
  position: absolute;
  right: -18px;
  top: -18px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid black;
  color: black;
  background-color: grey;
  opacity: 75%;
  pointer-events: none;
  & > h5 {
    margin: auto;
    padding-bottom: 0;
  }
`;
