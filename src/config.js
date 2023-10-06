
// Heatmap Config stores default values and will be merged with instance config
var HeatmapConfig = {
  defaultRadius: 90,
  defaultRenderer: 'canvas2d',
  defaultGradient: { 0.1: "rgb(0,0,0)", 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1.0: "rgb(255,0,0)"},
  defaultMaxOpacity: 1,
  defaultMinOpacity: 1,
  defaultBlur: .85,
  defaultXField: 'x',
  defaultYField: 'y',
  defaultValueField: 'value', 
  plugins: {}
};