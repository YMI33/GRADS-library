'reinit'

*flag for leap day
flag.12Z01MAR=0

*variable name list
var.1=hgt
var.2=uwnd
var.3=vwnd
var.4=air
var.5=omega
var.6=shum
var.7=pres
*variable number
varnum=6

*open file for reading
i=1
while(i<=varnum)
    'open /data3/users/xiezhiang/PJ/ctl/jradaily_'var.i'.ctl'
    i=i+1
endwhile

*set environment
'set dfile 1'
'set z 1'
'set lat -20 70'
'set lon 40 240'
 
*loop for variable
i=1
while(i<=varnum)
    'set fwrite /data3/users/xiezhiang/PJ/JRA55.'var.i'_pentad.dat'
    'set gxout fwrite'
*loop for time
    j=8402
    while(j<=20451)
*set time
        'set t 'j  
*leap day justify
        'q dim'
        lin=sublin(result,5)
        wrd=subwrd(lin,6)
        tflag=substr(wrd,1,8)
        if flag.tflag=0
            j=j+1
        endif

*loop for level
*        k=1
*        while(k<=27)
*        'set z 'k
*output data
        'd ave('var.i',t-2,t+2,1)'
*         k=k+1
*        endwhile
         say j

         j=j+5
   endwhile
   'disable fwrite'
    i=i+1
endwhile

