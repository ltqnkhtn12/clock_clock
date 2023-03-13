n = prompt("Mời bạn nhập n = ");
m = prompt("Mời bạn nhập m = ");

document.write("<table width='100%' border='1' cellspacing='0' cellpadding='0'>");
for (i = 1; i <= n; i++) {
    document.write("<tr>");
    if (i == 1) {
        document.write("<th colspan='3' align='center'>Danh sách sinh viên</th>")
    } else if (i == 2) {
        for (j = 1; j <= m; j++) {
            if (j == 1) {
                document.write("<th align='center'>MSSV</th>");
            } else if (j == 2) {
                document.write("<th align='center'>Họ tên</th>")
            } else {
                document.write("<th align='center'>Lớp</th>")
            }

        }
    } else {
        for (j = 1; j <= m; j++) {
            document.write("<td align='center' height='20px'></td>");

        }
    }
    document.write("</tr>");
}
document.write("</table>");