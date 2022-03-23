FUNCTION_NAME=$1
PATH_NAME=$2
ZIP_PARAMS=$3
ALIAS_NAME=$4
LAYER_NAME=$5

if [ -n "$PATH_NAME" ]; then cd $PATH_NAME && npm install --only=prod && npm run build && mv dist/* .; fi

zip lambda.zip -R '*.js' '*.js.map' '**/*.js' '**/*.json' '**/*.js.map' 'node_modules/'

rm -f lambda.zip

exit 0