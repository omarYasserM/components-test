import React from "react"
import { Section } from "../layout/Section"
const Gallery = () => {

  return (
    <Section title="Gallery" description="Some of Our products">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>


      </div>
    </Section>
  )
    
    
}
export default Gallery