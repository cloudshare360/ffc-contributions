To invoke the application from the command line in Windows, you can use PowerShell or Command Prompt to send HTTP requests using `curl` or PowerShell’s `Invoke-WebRequest`. Below, I'll guide you through both methods using sample commands for each CRUD operation.

### Using `curl` in Command Prompt

First, ensure you have `curl` installed. You can check by typing `curl --version` in Command Prompt. If it's not installed, you can download it or use the version that comes with Windows 10 and later.

Here are the commands using `curl`:

#### Create Item

```cmd
curl -X POST "http://localhost:3000/items" -H "Content-Type: application/json" -d "{\"name\": \"New Item\", \"description\": \"Description of the new item.\"}"
```

#### Read Item

Replace `<item-id>` with the actual ID of the item.

```cmd
curl -X GET "http://localhost:3000/items/<item-id>"
```

#### Update Item

Replace `<item-id>` with the ID of the item you wish to update.

```cmd
curl -X PUT "http://localhost:3000/items/<item-id>" -H "Content-Type: application/json" -d "{\"name\": \"Updated Item\", \"description\": \"Updated description.\"}"
```

#### Delete Item

Replace `<item-id>` with the ID of the item you wish to delete.

```cmd
curl -X DELETE "http://localhost:3000/items/<item-id>"
```

### Using `Invoke-WebRequest` in PowerShell

For users preferring PowerShell, `Invoke-WebRequest` is a powerful alternative to `curl`:

#### Create Item

```powershell
Invoke-WebRequest -Uri "http://localhost:3000/items" -Method POST -ContentType "application/json" -Body '{"name":"New Item", "description":"Description of the new item."}'
```

#### Read Item

Replace `<item-id>` with the actual ID of the item.

```powershell
Invoke-WebRequest -Uri "http://localhost:3000/items/<item-id>" -Method GET
```

#### Update Item

Replace `<item-id>` with the ID of the item you wish to update.

```powershell
Invoke-WebRequest -Uri "http://localhost:3000/items/<item-id>" -Method PUT -ContentType "application/json" -Body '{"name":"Updated Item", "description":"Updated description."}'
```

#### Delete Item

Replace `<item-id>` with the ID of the item you wish to delete.

```powershell
Invoke-WebRequest -Uri "http://localhost:3000/items/<item-id>" -Method DELETE
```

### General Tips

- **Localhost & Port**: Ensure the application is running locally on the specified port (`3000` in the examples).
- **API URL**: Replace `localhost:3000` with your actual API URL if testing against a deployed instance.
- **ID Handling**: After creating an item, use the returned ID for the Read, Update, and Delete operations.

Using these commands, you can test your AWS Node.js Lambda application directly from the Windows command line, facilitating easy integration and testing workflows.

### Example Response for Post
```
Invoke-WebRequest -Uri "http://localhost:3000/items" -Method POST -ContentType "application/json" -Body '{"name":"New Item", "description":"Description of the new item."}'
```
#### Output
```

StatusCode        : 201
StatusDescription : Created
Content           : {"id":"2024-08-28T16:20:41.439Z","name":"New Item","description":"Description of the new item."}
RawContent        : HTTP/1.1 201 Created
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 96
                    Content-Type: text/html; charset=utf-8
                    Date: Wed, 28 Aug 2024 16:20:41 GMT
                    ETag: W/"60-3gwipYn4KkE+D+knAqO8KK...
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 96], [Content-Type, text/html; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 96
```

Read Item
Replace <item-id> with the actual ID of the item.

curl -X GET "http://localhost:3000/items/2024-08-28T16:20:41.439

Invoke-WebRequest -Uri "http://localhost:3000/items/2024-08-28T16:20:41.439" -Method GET

