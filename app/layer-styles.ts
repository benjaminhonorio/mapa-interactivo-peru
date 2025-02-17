import type { LayerProps } from 'react-map-gl'

export const moving_label_styles: LayerProps = {
  id: 'moving_labels',
  type: 'symbol',
  layout: {
    'text-field': '{name}',
    'text-size': {
      base: 1,
      stops: [
        [12, 12],
        [16, 16]
      ]
    },
    'text-padding': 3,
    'text-letter-spacing': 0.1,
    'text-max-width': 7,
    'text-transform': 'uppercase',
    'text-allow-overlap': false // to avoid label collision, optionally can be true but they will clutter
  },
  paint: {
    'text-color': 'hsl(0, 0%, 100%)',
    'text-halo-color': 'hsl(0, 0, 0)',
    'text-halo-width': 1.5,
    'text-halo-blur': 1
  }
}

export const fixed_label_styles: LayerProps = {
  id: 'fixed_labels',
  type: 'symbol',
  layout: {
    'text-field': '{name}',
    'text-size': {
      base: 1,
      stops: [
        [12, 12],
        [16, 16]
      ]
    },
    'text-padding': 3,
    'text-letter-spacing': 0.1,
    'text-max-width': 7,
    'text-transform': 'uppercase',
    'text-allow-overlap': false // to avoid label collision,
  },
  paint: {
    'text-color': 'hsl(0, 0%, 100%)',
    'text-halo-color': 'hsl(0, 0, 0)',
    'text-halo-width': 1.5,
    'text-halo-blur': 1
  }
}

export const region_area_styles: LayerProps = {
  id: 'region_area',
  type: 'fill',
  paint: {
    'fill-color': 'transparent'
  },
  filter: ['==', ['length', ['get', 'id']], 2]
}

export const province_area_styles: LayerProps = {
  id: 'province_area',
  type: 'fill',
  paint: {
    'fill-color': 'transparent'
  },
  filter: ['==', ['length', ['get', 'id']], 4]
}

export const district_area_styles: LayerProps = {
  id: 'district_area',
  type: 'fill',
  paint: {
    'fill-color': '#ccc'
  },
  filter: ['==', ['length', ['get', 'id']], 6]
}

export const territories_outline_styles: LayerProps = {
  id: 'territories_ouline',
  type: 'line',
  paint: {
    'line-color': '#b3b3b3',
    'line-width': 1
  }
}

export const region_outline_styles: LayerProps = {
  id: 'region_outline',
  type: 'line',
  paint: {
    'line-color': 'red',
    'line-width': 1.5
  },
  filter: ['==', ['length', ['get', 'id']], 2]
}

export const province_outline_styles: LayerProps = {
  id: 'province_outline',
  type: 'line',
  paint: {
    'line-color': '#F58634', // orange
    'line-width': 1
  },
  filter: ['==', ['length', ['get', 'id']], 4]
}

export const district_area_selected_styles: LayerProps = {
  id: 'district_area_selected',
  type: 'fill',
  paint: {
    'fill-color': '#bbb' // darker gray
  },
  filter: ['==', ['length', ['get', 'id']], 6]
}

export const district_outline_styles: LayerProps = {
  id: 'district_outline',
  type: 'line',
  paint: {
    'line-color': '#FFCC29', // yellow
    'line-width': 1
  },
  filter: ['==', ['length', ['get', 'id']], 6]
}

// Highlighted territory polygons
export const hoverLayer: LayerProps = {
  id: 'territory-hover',
  type: 'line',
  source: 'visible-territories',
  paint: {
    'line-color': 'red',
    'line-width': 3
  }
}
