// select Elements

const notificationsContainer = document.querySelector(
  "#notifications-container"
);
const unreadCount = document.querySelector("#unread-count");
const markAllReadBtn = document.querySelector("button#mark-all-read");

// --- select elements ended ---

//  variables
let notifications = [];

const BASE_URL = `${location.href}/data/db.json`;

const fetchData = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data.notifications;
  } catch (error) {
    console.error(error);
  }
};

const showNotifications = async () => {
  const data = await fetchData(BASE_URL);
  notifications = data;
  renderNotifications(notifications);
  showUnread(notifications);
};

showNotifications();

function renderNotifications(notifications) {
  const notificationsHTML = notifications?.map((item) => {
    return `<li
            class="p-4 rounded-lg mb-2.5 ${
              item.isUnread ? "bg-Very-light-grayish-blue" : "bg-transparent"
            }"
          >
            <div class='flex gap-3 items-start'>
              <div class="w-10 h-10">
                <img
                  src=${item.profilePic}
                  alt="profile picture"
                />
              </div>
              <div class="flex-1 text-Dark-grayish-blue text-sm font-medium">
                <h4>
                  <a
                    href="#"
                    class="text-Very-dark-blue font-extrabold hover:text-primary-blue mr-1 cursor-pointer"
                  >
                    ${item.senderName}
                  </a>
                    ${item.action}
                  <a
                    href="#"
                    class="pl-1 font-extrabold hover:text-primary-blue cursor-pointer ${
                      item.groupName ? "text-primary-blue" : ""
                    }"
                  >
                    ${item.post || item.groupName || ""}
                  </a>
                  <span
                    class="ml-1 w-2 h-2 rounded-full bg-primary-red ${
                      item.isUnread ? "inline-block" : "hidden"
                    }"
                  ></span>
                </h4>
                <h5>${item.time}</h5>
              </div>
            </div>
               ${
                 item.text
                   ? `<div class='mt-2 ml-12 pl-1 text-Dark-grayish-blue text-sm font-medium'>
                      <p class="px-4 py-3 border rounded-md hover:bg-Light-grayish-blue-1 hover:border-Light-grayish-blue-1 hover:text-Dark-grayish-blue cursor-pointer">
                      ${item.text}
                      </p>
                      </div>`
                   : ""
               }
          </li>`;
  });

  notificationsContainer.innerHTML = notificationsHTML.join("\n");
}

function showUnread(arr) {
  unreadCount.innerText = arr.filter((n) => n.isUnread === true).length;
}

// mark as read
markAllReadBtn.addEventListener("click", markAllRead);

function markAllRead() {
  const update = notifications.map((item) => {
    return {
      ...item,
      isUnread: false,
    };
  });

  notifications = update;
  renderNotifications(notifications);
  unreadCount.innerText = "";
}
