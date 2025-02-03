#!/bin/bash

COMPONENTS_DIR="components"
TYPE=$1
NAME=$2

if [[ -z "$NAME" || -z "$TYPE" ]]; then
  echo "Usage: ./create-component.sh <type> <name>"
  echo "Example: ./create-component.sh atoms Button"
  exit 1
fi

# Ensure the directory exists
mkdir -p "$COMPONENTS_DIR/$TYPE"

# Create the new component file inside the existing folder
cat > "$COMPONENTS_DIR/$TYPE/$NAME.tsx" <<EOL
const $NAME = () => {
  return <div>$NAME Component</div>;
};

export default $NAME;
EOL

echo "✅ Component '$NAME.tsx' created in '$COMPONENTS_DIR/$TYPE/'"
