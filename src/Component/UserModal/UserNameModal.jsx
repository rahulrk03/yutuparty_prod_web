import React, {useState} from 'react';
import { useDialog } from 'react-st-modal';
import Button from '@material-ui/core/Button';

function UserNameModal(props) {
    const dialog = useDialog();
  
    const [value, setValue] = useState(props.userName);
 
    const onClickJoin = (event) => {
     event.preventDefault();
     dialog.close(value);
     }
 
     const onClickClose = (event) => {
         event.preventDefault();
         dialog.close();
         }
 
     const containerStyle={
         padding: "10px",
         marginTop:"10px",
        //  width:10,
        //  height:80
         // display: 'flex', 
         // flexDirection: 'row'
     }
 
     const inputBoxStyle ={
        display: 'flex',
        flexDirection:'row',
        height:"25px",
        fontSize:"14pt"
         
     }
 
     const buttonBoxStyle ={
         display: 'flex',
         flexDirection:'row',
         marginLeft:'160px',
         marginTop:'20px'
     }
 
    return (
      <div style={containerStyle}>
             <label style={inputBoxStyle}>
                 Enter Your name: 
                     <input
                         type="text"
                         value={value}
                         style={{marginLeft:"15px"}}
                         onChange={(e) => {
                         setValue(e.target.value);
                         }}
                     />
             </label>
             <div style={buttonBoxStyle}>
             <Button  variant="contained"
                      color="primary"
                     onClick={onClickJoin}>
                     Confirm
                 </Button>
            <Button variant="contained" 
                color="secondary"
                style={{marginLeft:"10px"}}
                onClick={onClickClose}>
                Cancel
            </Button>
             </div>
      </div>
    );
  }

export default UserNameModal
