function addNewElement(p1) {
    let parentTag = p1.nextElementSibling;
  
    let existingValue = parentTag.innerHTML;
  
    
    let message = document.querySelector("#messageId").value;
  
    let newValue = `<div class="fs-5"
                        style="
                          font-size: 28px;
                          margin-top: 8px;
                          display: flex;
                          justify-content: space-between;
                
                        "
                      >
                        <div>${message}</div>
                        <input
            style="height: 30px"
            class="btn btn-outline-dark p-1 mb-3"
            type="button"
            value="Delete"
            onclick="deleteTheMessage(this)"
          />
                      </div>`;
  
    parentTag.innerHTML = newValue + existingValue;
  
    p1.previousElementSibling.value = "";
  }
  
  function deleteTheMessage(p1) {
    p1.parentElement.remove();
  }