// import React from 'react';
// import {
//   withKnobs, text, boolean,
// } from '@storybook/addon-knobs';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import { FormControl, FormHelperText } from '@material-ui/core';
// import InputComponent from './Input';
// import './Input.css';
//
// export default {
//   component: InputComponent,
//   title: 'Input',
//   decorators: [withKnobs],
// };
//
// export const Input = () => (
//   // eslint-disable-next-line react/jsx-filename-extension
//   <TextField
//     error={boolean('Error', false)}
//     helperText={text('Helper Text', 'Helper text')}
//     value={text('Value', '')}
//     label={text('Label', 'Enter your name')}
//     variant="outlined"
//   />
// );
//
// export function SelectStory(props) {
//   const [value, setValue] = React.useState(1);
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
//   return (
//     <div className="select-component">
//       <FormControl style={{ minWidth: 403 }}>
//         <Select
//           className="selectedItem formSelect"
//           variant="outlined"
//           onChange={handleChange}
//           value={value}
//           displayEmpty
//           autoWidth
//           fullWidth="400px"
//           IconComponent={ArrowIcon}
//         >
//           <MenuItem value={1}>{text('Text first item:', 'First item')}</MenuItem>
//           <MenuItem value={2}>{text('Text second item:', 'Second item')}</MenuItem>
//           <MenuItem value={3}>{text('Text third item:', 'Third item')}</MenuItem>
//         </Select>
//         <FormHelperText>{text('Helper text', 'Assistive text')}</FormHelperText>
//       </FormControl>
//     </div>
//   );
// }
