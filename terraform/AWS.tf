terraform {
  required_providers {
      aws = {
        source  = "hashicorp/aws"
        version = "4.16.0"
      }
  }
  cloud {
    organization = "final-proj"
    workspaces {
      name = "gh-test-demo"
    }
  }
}

provider "aws" {
  region = "ap-northeast-2"
}