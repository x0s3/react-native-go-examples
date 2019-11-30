# Cosas a tener en cuenta para poder compilar:

- Depende de como tengas tus paquetes instalados debes incluir este archivo en vuestra carpeta go donde tengais todo lo relacionado con GOPATH y GOMOBILE (también puedes hacer un softlink y apañao')

- Tener ANDROID_HOME y ANDROID_NDK_HOME exportados

# Compile commands

## Android

```gomobile bind [-x -v] -target=android $YOUR_FILE_PATH```

## iOS

```gomobile bind [-x -v] -target=ios $YOUR_FILE_PATH```

# Run tests

```go test [-cover]```
