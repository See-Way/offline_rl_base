#export IMG=docker.fabu.ai:5000/yardplanning/yardplanning_dev:latest
if [ -z $DOCKER_NAME ]; then
  DOCKER_NAME="${USER}_yardplanning_dev"
fi
export DOCKER_NAME
export IMG=yardplanning/yardplanning_dev:latest
