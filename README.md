name: Run Tests and Deploy 🚀

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Set Up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.8'

      - name: Install Dependencies
        run: pip install -r requirements.txt

      - name: Run Tests
        run: pytest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: build
