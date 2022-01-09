import logo from '../logo.svg';
import '../styles/App.css';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useForm } from 'react-hook-form';
import Headers from './Headers';
import SvgMaterialIcons from './SvgMaterialIcons';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Footer from './Footer';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let renderCount = 0

function App() {
  renderCount++

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmitCallBack = data => console.log(data);

  //console.log("Observation du champ lastName:",watch("lastName")); // watch input value by passing the name of it

  return (
    <>
    <Headers
      renderCount={renderCount}
      description="Performant, flexible and extensible forms with ..."
    />
    <h2>Formulaire</h2>
    <form onSubmit={handleSubmit((data) => {
      console.log(data);
    })}>
      <ul className='formList'>
        <li>
          <span>Nom: </span>
          <input {...register("nom", {
            required: "Le nom n'est pas renseigné.",
            minLength: {
              value: 4,
              message: "taille minimale 4 caractères"}})} placeholder='Last name'/>
          {/* <p className="err"><WarningAmberIcon />{errors.nom?.message}</p> */}
          { errors.nom && 
            <p className="err"><WarningAmberIcon /> {errors.nom.message} </p>
          }
        </li>

        <li>
          <span>Prénom: </span>
          <input {...register("prenom", {
            required: "Le prénom n'est pas renseigné.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "caractères invalides."},
         maxLength: {
              value: 20,
              message: "taille maximale 20 caractères."}, 
            minLength: {
              value: 4,
              message: "taille minimale 4 caractères."
            }})} placeholder='First name' />
            { errors.prenom && 
              <p className="err"><WarningAmberIcon /> {errors.prenom.message} </p>
            }
        </li>

        <li>
          <span>Adresse mail: </span>
          <input {...register("email", { required: "L'adresse email n'est pas renseignée."})} />
          { errors.email && 
            <p className="err"><WarningAmberIcon /> {errors.email.message} </p>
          }
        </li>

      {/* {errors.EmailAddress && <span>Ce champ est requis</span>} */}

      <input type="submit" />
      </ul>
      { errors.email && <p>Des erreurs sont présentes!!!</p>}
    </form>
    <SvgMaterialIcons />
    
    {/* ------------------------------------------------------------------- */}
    <h3>Test de Grid API</h3>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs:1, sm:2, md:3}}>
        <Grid item xs={12}>
          <Item>xs=12</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>

    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignContent="flex-start"
      height="300px"
      bgcolor="orange"
      border="2px solid green"
      padding="5px"
            >Ce texte est dans un grid positionné en haut à droite!</Grid>
    {/* ------------------------------------------------------------------- */}

    <Footer />


    </>
  );
}

export default App;
