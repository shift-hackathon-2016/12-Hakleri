help:
	@awk 'BEGIN{print "\nMakefile usage:\n"};/^[^#[:space:]\.].*:/&&$$0!~/=/{split($$0,t,":");printf("%8s %-16s %s\n","make",t[1],x);x=""};/^#/{gsub(/^# /,"");x=$$0;if(x!="")x="- "x};END{printf "\n"}' Makefile

ifeq (deploy-prod,$(firstword $(MAKECMDGOALS)))
	  NEW_VERSION := `git tag -l v*.*.* | sort -t . -k1,1r -k2,2r -k3,3nr | head -1 |  gawk -F. '{print $$1,$$2,$$3+1}' | sed 's/ /./g'`
endif

remotes:
	-@git remote rm shifty_dev
	-@git remote rm shifty_prod
	@git remote add shifty_dev ssh://deploy@52.208.0.105/home/deploy/shifty_dev.git
	@git remote add shifty_prod ssh://deploy@52.208.0.105/home/deploy/shifty_prod.git

deploy-prod:
	@echo "\n ---- Deploying production..."
	@git checkout master
	@git merge -m "Merge develop" develop
	@git tag @(NEW_VERSION)
	@echo --- Pushing to origin
	@git push origin
	@git push origin --tags
	@echo --- Deploying to server 
	@git push shifty_prod master:master -f 
	@echo "--- Done deploying production! \n"
	@git checkout develop

deploy-dev:
	@echo "\n ---- Deploying develop..."
	@echo --- Pushing to origin
	@git push origin
	@git push shifty_dev develop:master -f 
	@echo "--- Done deploying develop! \n"

build:
	#TODO: frontend build

run: #TODO: call build
	@echo "--- Don't forget to activate virtualenv before!"
	envdir shifty/.env shifty/manage.py runserver 3000
