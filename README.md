
```bash
if [[ "$(uname)" == "Darwin" ]]; then sed -i '' "s/deno-devcontainer-template/$(basename $(pwd))/g" .devcontainer/compose.yaml; else sed -i "s/deno-devcontainer-template/$(basename $(pwd))/g" .devcontainer/compose.yaml; fi
```
