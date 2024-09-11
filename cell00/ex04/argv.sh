
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
fi
for i in {1..3};  # Loop starts from 0 as arrays are zero-indexed
do
    if [ -n "${!i}" ]; then
        echo "${!i}"
    fi
done