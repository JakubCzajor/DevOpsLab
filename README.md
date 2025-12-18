# DevOpsLab

## Uruchomienie klastra Kubernetes

Uruchomienie minikube:

```bash
minikube start
```

Budowa obrazów Dockera w minikube:

```bash
eval $(minikube docker-env)
docker build -t devopslab-backend:latest -f Dockerfile.backend .
docker build -t devopslab-frontend:latest -f Dockerfile.frontend .
```

Uruchomienie Deployment i Service:

```bash
kubectl apply -f k8s/
```

Sprawdzenie podów:

```bash
kubectl get pods
```

Skalowanie backendu do 2 replik:

```bash
kubectl scale deployment backend-deployment --replicas=2
```
Sprawdzenie adresu frontendu w przeglądarce:

```bash
minikube service frontend-service
```
