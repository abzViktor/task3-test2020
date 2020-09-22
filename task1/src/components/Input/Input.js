import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../../stories/button.css';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


export default function InputComponent({ input: { type, placeholder }, onInputChange} ) {

    const [isValid, setValid] = useState(false);
    const [mes, setMessage] = useState("")

    function onInputChange(type, ev) {
        if(type === "name") {
            if(ev.target.value.match(/[^A-Za-z\s]/g)) {
                setValid(true);
                setMessage("Number should contain only latin letters!");
            } else if(!ev.target.value.match(/.{2,128}/g)) {
                console.log(ev.target.value);
                setValid(true);
                setMessage("Number should be at least 2 characters and less that 128!");
            } else {
                setValid(false);
                setMessage("");
            }
        }

        if(type === "email") {
            if(!ev.target.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
                setValid(true);
                setMessage("Email is not valid!");
            } else {
                setValid(false);
                setMessage("");
            }
        }

        if(type === "workerId") {
            if(ev.target.value.match(/[^a-z0-9_]/g)) {
                setValid(true);
                setMessage("Number should contain only numbers and lowercase latin letters");
            } else if(!ev.target.value.match(/.{2,}/g)) {
                setValid(true);
                setMessage("Number should be at least 2 characters!");
            } else if(ev.target.value.match(/.{128}/g)) {
                ev.target.value = ev.target.value.substr(0, 128);
                setValid(true);
                setMessage("Number should be less than 128!");
            } else {
                setValid(false);
                setMessage("");
            }
        }

    }

    return (
        <form>
            <TextField
                placeholder={placeholder}
                error={isValid}
                helperText={mes}
                onChange={(ev) => onInputChange(type, ev)}
            />

        </form>
    );
}



// class InputComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     render() {
//         return (
//             <Input type="text" value={this.state.value} onChange={this.handleChange} />
//         );
//     }
// }

