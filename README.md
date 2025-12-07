# DevOpsLab - wersja z jednym konterenem

## Budowanie kontenera:
```bash
docker build -t devopslab .
```

## Uruchomienie kontenera:
```bash
docker run -d -p 3000:3000 devopslab
```

## Testowanie poprawności działania:
http://localhost:3000/
