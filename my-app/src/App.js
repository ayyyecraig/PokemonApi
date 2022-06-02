import React from 'react'
import { Route, Routes } from 'react-router'
import Land from './components/Land'
import Pokemon from './components/Pokemon'

export default function () {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<Land />} />
          <Route path='/:id' element={<Pokemon />} />
        </Routes>
      </main>
    </div>
  )
}
