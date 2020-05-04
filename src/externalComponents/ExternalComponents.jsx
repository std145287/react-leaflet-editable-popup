import React from 'react'
import MapContext from '../Context'
import ActiveArea from './ActiveArea'
import ZoomControl from './ZoomControl'
import EsriGeoSearch from './EsriGeoSearch'

import './ExternalComponents.scss'

class ExternalComponents extends React.Component{

   toggleLayer = e => {
      e.preventDefault()
      e.stopPropagation()
      this.props.toggleLayer(e)
   }

   render(){

      const { customLayers } = this.props

      return(

         <div className="ExternalComponents">
            <div className="sidebar">

               <div className="CustomLayersControls">
                  <h4>Custom Layers</h4>
                     <label layer="esriLeafletLayer" onClick={this.toggleLayer}>
                        <input layer="esriLeafletLayer" type="checkbox" checked={customLayers.esriLeafletLayer} onChange={this.toggleLayer}/>
                        Esri Leaflet Layer
                     </label>
                     <label layer="esriLeafletAuthLayer" onClick={this.toggleLayer}>
                        <input layer="esriLeafletAuthLayer"  type="checkbox" checked={customLayers.esriLeafletAuthLayer} onChange={this.toggleLayer}/>
                        Esri Leaflet Auth Layer
                     </label>
               </div>
            
               <div>
                  <h4>External components</h4>
                  <p>All components in this panel are not children of the <code>&lt;Map /&gt;</code> component.</p>

                  <ZoomControl />

                  <EsriGeoSearch expanded={true} />
               </div>

            </div>

            <div className="ActiveAreaContainer">
               <ActiveArea>
                  <code style={{backgroundColor: 'rgba(255,255,255,0.7)'}}>
                     This activeArea is defined outside of the Map component, but communicates with it through the MapContext object.
                  </code>
               </ActiveArea>
            </div>

         </div>

      )
   }
}

export default ExternalComponents