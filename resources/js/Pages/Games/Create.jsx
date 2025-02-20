import InputLabel from '@/Components/InputLabel';
import Navbar from '@/Components/Navbar';

import TextInput from '@/Components/TextInput';
import React, { useState } from 'react'

export default function Create() {
    const [name, setName] = useState();
    const [classification, setClassification] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const submit = (e) => {
      e.preventDefault();
      console.log(name)
      console.log(classification)
      console.log(price)
      console.log(description)

      

    }


  return (
    <>
    <Navbar></Navbar>

    <div>Crear nuevo Juego</div>
    <form onSubmit="{submit}">
      <InputLabel htmlFor="name" value="Nombre" />
      <TextInput name="name" value={name} onChange={(e) => setName(e.target.value)}></TextInput>

      <InputLabel htmlFor="classification" value="Clasificacion" />
      <TextInput name="classification" value={classification} onChange={(e) => setClassification(e.target.value)}></TextInput>

      <InputLabel htmlFor="price" value="Precio" />
      <TextInput name="price" value={price} onChange={(e) => setPrice(e.target.value)}></TextInput>

      <InputLabel htmlFor="description" value="Descripcion" />
      <TextInput name="description" value={description} onChange={(e) => setDescription(e.target.value)}></TextInput>
 
    <button onClick={submit}>Guardar</button>
    </form>

    </>
    
  )
}