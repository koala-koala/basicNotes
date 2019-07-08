#!/bin/sh

# Author: koala

#echo "what is your name"
#read PERSON
#echo "hello, $PERSON"

#NAME="KOALA"
#echo $NAME
#unset NAME
#echo $NAME

#for  TOKEN in $*
#do 
#  echo $TOKEN
#done

#echo "file name:$0"
#echo "first params: $1"

#ARR_NAME[0]="1"
#ARR_NAME[1]="2"
#ARR_NAME[2]="3"
#ARR_NAME=("a" "b" "c")

#echo ${ARR_NAME[0]}

#val=`expr 2 + 3`
#echo "total vlaue: ${val}"

DATE=`date`
echo "Date is $DATE"

USERS=`who | wc -l`
echo "Logged in user are $USERS"

UP=`date ; uptime`
echo "Uptime is $UP"