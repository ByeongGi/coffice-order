# https://askubuntu.com/questions/373047/i-used-wget-to-download-html-files-where-are-the-images-in-the-file-stored
# --restrict-file-names=nocontrol 파일명 제한 해체 
# --local-encoding=uft-8 기본 인코딩셋은 utf-8 로 설정 
#  prefer to use --page-requisites (-p for short) instead of -r here as it downloads everything the page needs to display but no other pages, and I don't have to think about what kind of files I want.
# Actually I'm usually using something like
# wget -E -H -k -p http://textbook.s-anand.net/ncert/class-xii/chemistry/hello-this-first-chapter
# This means:

# -E: Append .html to the file name if it is an HTML file but doesn't end in .html or similar
# -H: Download files from other hosts, too
# -k: After downloading convert any link in it so they point to the downloaded files
# -p: Download anything the page needs for proper offline viewing

wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/더블에스프레소-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/앗메리카노-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/원조커피-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/연유라떼-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/비엔나커피-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/라떼비엔나-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/크림그린티라떼-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/백스라떼-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/바닐라라떼-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/카페모카-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/카라멜마끼아또-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/크리미모카라떼-2.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/코코넛커피스무디-1.jpg
wget -E -H -k -p --restrict-file-names=nocontrol --local-encoding=uft-8 http://paikdabang.com/wp-content/uploads/2018/05/코코넛라떼-1.jpg