import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));
const customIcons = [
   {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  {
    icon: <SentimentVerySatisfiedIcon color="gold" />,
    label: 'Very Satisfied',
  },
];
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value-1].icon}</span>;
}
export default function RadioGroupRating({x}) {
    return (
    <StyledRating
      name="read-only"
      value={x}
      IconContainerComponent={IconContainer}
      getLabelText={(x)=>customIcons[x-1].label}
      highlightSelectedOnly
      readOnly
    />
  );
}