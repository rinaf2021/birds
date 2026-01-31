echo "Deploy.sh";

lastCommit=`git log -n 1 --pretty=format:"%H"`;
git pull;
isApi="N";
isWeb="N";
deployPath=`pwd`;
files=`git diff --name-only HEAD "$lastCommit"`;
for file in $files; do
if [[ $file == *"web/"* ]]; then
    isWeb="Y";
fi
done;
if [[ $isApi == 'Y' ]]; then
	cd $deployPath;
	./api.sh;
fi
if [[ $isWeb == 'Y' ]]; then
	cd $deployPath;
	./web.sh;
fi