#!/usr/bin/python3
"""
Python script that takes your GitHub credentials (username and password) and
uses the GitHub API to display your id.
"""

import requests
import sys

if __name__ == "__main__":
    username, password = sys.argv[1], sys.argv[2]
    url = "https://api.github.com/user"
    response = requests.get(url, auth=(username, password))
    print(response.json()["id"]) if response.status_code == 200 else print(f"Error code: {response.status_code}")
