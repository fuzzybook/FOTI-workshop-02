import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/EventEmitter.js',
  output: [
    {
      name: 'EventEmitter',
      file: 'dist/EventEmitter.js',
      format: 'cjs'
    }
  ],
  plugins: [
    resolve()
    // commonjs()
  ]
}
