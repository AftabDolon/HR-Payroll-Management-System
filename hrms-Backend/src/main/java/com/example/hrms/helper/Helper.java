package com.example.hrms.helper;

import com.example.hrms.entity.Employee;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Helper {

    public static boolean checkExcelFormat(MultipartFile file) {
        String contentType = file.getContentType();
        if (contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet ")) {
            return true;
        } else {
            return false;
        }
    }

    public static List<Employee> convertExcelToListOfUser(InputStream is) {
        List<Employee> list = new ArrayList<>();
        try {

            XSSFWorkbook workbook = new XSSFWorkbook(is);
            XSSFSheet sheet = workbook.getSheet("data");
            int rowNumber = 0;
            Iterator<Row> iterator = sheet.iterator();
            while (iterator.hasNext()) {
                Row row = iterator.next();
                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }
                Iterator<Cell> cells = row.iterator();
                int cid = 0;
                Employee e = new Employee();
                while (cells.hasNext()) {
                    Cell cell = cells.next();
                    switch (cid) {
                        case 0:
                            e.setEmployeeId(cell.getStringCellValue());
                            break;
                        case 1:
                            e.setEmployeeName(cell.getStringCellValue());
                            break;
                        case 2:
                            e.setEmployeeDesignation(cell.getStringCellValue());
                            break;
                        case 3:
                            e.setDepartment(cell.getStringCellValue());
                            break;
                        case 4:
                            e.setPhone((String.valueOf(cell.getStringCellValue())) );

                            break;
                        case 5:
                            e.setJoiningDate((String.valueOf( cell.getStringCellValue())));
                            break;
                        case 6:
                            e.setEmail(cell.getStringCellValue());
                            break;
                        case 7:
                            e.setNidNumber( String.valueOf(cell.getStringCellValue()));
                            break;
                        case 8:
                            e.setBloodGroup(cell.getStringCellValue());
                            break;
                        case 9:
                            e.setPresentAddress(cell.getStringCellValue());
                            break;
                        case 10:
                            e.setPermanentAddress(cell.getStringCellValue());
                            break;
                        case 11:
                            e.setSalary( String.valueOf(cell.getStringCellValue()));
                            break;
                        case 12:
                            e.setEducationalStatus(cell.getStringCellValue());
                            break;
                        case 13:
                            e.setEmployeeType(cell.getStringCellValue());
                            break;
                        case 14:
                            e.setRole(cell.getStringCellValue());
                            break;
                        case 15:
                            e.setImage(cell.getStringCellValue());
                            break;
                        default:
                            break;

                    }
                    cid++;
                }
                list.add(e);
            }


        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
