package anushibin007.roominator.backend.utilities;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class JSONConverter {
    ObjectMapper objectMapper;
    public static String getJSON(Object o) throws JsonProcessingException {
        ObjectWriter objectWriter = new ObjectMapper().writer();
        return objectWriter.writeValueAsString(o);
    }

    public static JSONArray getJSONArray(ResultSet resultSet) throws SQLException, JSONException {
        JSONArray jsonArray = new JSONArray();
        ResultSetMetaData rsmd = resultSet.getMetaData();
        while (resultSet.next()) {
            int numColumns = rsmd.getColumnCount();
            JSONObject obj = new JSONObject();
            for (int i = 1; i <= numColumns; i++) {
                String column_name = rsmd.getColumnName(i);
                obj.put(column_name, resultSet.getString(column_name));
            }
            jsonArray.put(obj);
        }
        return  jsonArray;
    }
}
