'use client';

import React, { useState } from 'react';
import { UserPlus, Shield, CheckCircle, XCircle, X, Save } from 'lucide-react';

// Dữ liệu mẫu (Đưa ra ngoài để làm giá trị mặc định)
const INITIAL_USERS = [
  { id: 1, name: "Đào Xuân Đạt", email: "datdx@goccode.vn", role: "Admin", status: "Active", date: "01/01/2026" },
  { id: 2, name: "Nguyễn Minh Tuấn", email: "tuan@goccode.vn", role: "Author", status: "Active", date: "12/02/2026" },
  { id: 3, name: "Trần Thị Thảo", email: "thao@goccode.vn", role: "Editor", status: "Suspended", date: "25/03/2026" },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(INITIAL_USERS);
  
  // State quản lý Bật/Tắt Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  // State lưu thông tin user đang được chọn để sửa
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Hàm mở Modal Sửa quyền
  const openEditModal = (user: any) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  return (
    <div className="space-y-6 relative">
      {/* Tiêu đề & Nút Thêm User */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Quản lý thành viên</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Phân quyền, quản lý trạng thái hoạt động của các tài khoản.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold shadow-sm text-sm transition-colors w-max"
        >
          <UserPlus size={16} /> Thêm thành viên
        </button>
      </div>

      {/* Bảng danh sách User */}
      <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 font-semibold">Người dùng</th>
                <th className="px-6 py-4 font-semibold">Quyền hạn</th>
                <th className="px-6 py-4 font-semibold">Ngày tham gia</th>
                <th className="px-6 py-4 font-semibold">Trạng thái</th>
                <th className="px-6 py-4 font-semibold text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/40 dark:hover:bg-slate-900/20">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{user.name}</p>
                      <p className="text-xs text-slate-400">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-sm font-medium">
                      <Shield size={14} className="text-blue-500" /> {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      user.status === 'Active' ? 'text-emerald-600' : 'text-rose-500'
                    }`}>
                      {user.status === 'Active' ? <CheckCircle size={14} /> : <XCircle size={14} />}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => openEditModal(user)}
                      className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline px-2 py-1"
                    >
                      Sửa quyền
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL: THÊM THÀNH VIÊN ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 dark:bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center p-5 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Thêm thành viên mới</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Họ và tên</label>
                <input type="text" placeholder="Nhập tên..." className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 text-slate-800 dark:text-slate-200" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Email đăng nhập</label>
                <input type="email" placeholder="example@goccode.vn" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 text-slate-800 dark:text-slate-200" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Vai trò (Role)</label>
                <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 text-slate-800 dark:text-slate-200">
                  <option>Author (Tác giả)</option>
                  <option>Editor (Biên tập viên)</option>
                  <option>Admin (Quản trị viên)</option>
                </select>
              </div>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors">Hủy</button>
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-colors flex items-center gap-2">
                <UserPlus size={16} /> Tạo tài khoản
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: SỬA QUYỀN ================= */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 dark:bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center p-5 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cập nhật quyền hạn</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center gap-3 border border-blue-100 dark:border-blue-900/50">
                 <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold">
                    {selectedUser.name[0]}
                 </div>
                 <div>
                    <p className="font-bold text-slate-900 dark:text-white">{selectedUser.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{selectedUser.email}</p>
                 </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5 mt-4">Phân quyền mới</label>
                <select defaultValue={selectedUser.role} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 text-slate-800 dark:text-slate-200">
                  <option value="Author">Author (Tác giả)</option>
                  <option value="Editor">Editor (Biên tập viên)</option>
                  <option value="Admin">Admin (Quản trị viên)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Trạng thái tài khoản</label>
                <select defaultValue={selectedUser.status} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 text-slate-800 dark:text-slate-200">
                  <option value="Active">Hoạt động (Active)</option>
                  <option value="Suspended">Đình chỉ (Suspended)</option>
                </select>
              </div>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors">Hủy</button>
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-colors flex items-center gap-2">
                <Save size={16} /> Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}