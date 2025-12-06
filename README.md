# DevOpsLab - wersja z jednym konterenem

## Budowanie kontenera:
```bash
sudo docker build -t devopslab .
```

## Uruchomienie kontenera:
```bash
sudo docker run -d -p 3000:3000 devopslab
```

## Testowanie poprawności działania:
http://localhost:3000/
