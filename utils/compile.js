const ClosureCompiler = require("google-closure-compiler").compiler;

const closureCompiler = new ClosureCompiler({
  js: "src/js/contentscript.js",
  js_output_file: "build/contentscript.bundle.js",
  compilation_level: isTruthy(process.env.DEBUG)
    ? "WHITESPACE_ONLY"
    : "ADVANCED",
  language_in: "ECMASCRIPT_NEXT",
  language_out: "ECMASCRIPT_NEXT",
  output_wrapper: "+function(){%output%}.call(this)",
});

closureCompiler.run((exitCode, stdOut, stdErr) => {
  if (exitCode !== 0) throw stdErr;
});

function isTruthy(str) {
  return str != null && str !== "false" && str !== "0";
}
