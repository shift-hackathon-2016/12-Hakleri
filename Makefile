help:
	@awk 'BEGIN{print "\nMakefile usage:\n"};/^[^#[:space:]\.].*:/&&$$0!~/=/{split($$0,t,":");printf("%8s %-16s %s\n","make",t[1],x);x=""};/^#/{gsub(/^# /,"");x=$$0;if(x!="")x="- "x};END{printf "\n"}' Makefile

remotes:
	-@git remote rm shifty_dev
	-@git remote rm shifty_prod
	@git remote add shifty_dev ssh://deploy@52.208.0.105/home/deploy/shifty_dev.git
	@git remote add shifty_prod ssh://deploy@52.208.0.105/home/deploy/shifty_prod.git

pull:
	@git fetch
	@for branchh in develop master ; do \
		echo '\n Pulling origin/'$$branch ; \
		git checkout $$branch ; \
		git pull --rebase origin $$branch ; \
	done 
	@git checkout develop 


deploy-prod: pull
deploy-prod:
	@git push origin 
	@echo "\n ---- Deploying production..."
	@git checkout master
	@git merge -m "Merge develop" develop
	@echo --- Pushing to origin
	@git push origin
	@echo --- Deploying to server 
	@git push shifty_prod master:master -f 
	@echo "--- Done deploying production! \n"
	@git checkout develop

deploy-dev: pull
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
