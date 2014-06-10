
DELETE FROM AspNetUserRoles;
DELETE FROM AspNetUserLogs;
DELETE FROM AspNetUserNotes;
DELETE FROM AspNetUsers;
DELETE FROM AspNetRoles;

INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'1', N'Administrator');

INSERT INTO [dbo].[AspNetUsers] ([AccessFailedCount], [LockoutEnabled], [TwoFactorEnabled], [PhoneNumberConfirmed], [EmailConfirmed], [Id], [UserName], [PasswordHash], [SecurityStamp], [Email], [First], [Last], [Bio], [Twitter], CreatedAt) 
VALUES (N'0', N'true', N'false', N'true', N'true', N'2467fbf0-3015-4ba4-90fc-00021d04f0b4', N'sonmez', N'AKJRjdT/Zfz7AjCzQONIbdmfVFnv6sKaGI2+r6O7Ryg84zcv/onH7DxUGV6KHoS+UQ==', N'efc5874b-55a8-40ce-ac78-75cf3d502fe9', N'john.sonmez@gmail.com', N'John', N'Sonmez', N'Author at Pluralsight', N'johnsonmez', '1/03/2011')
INSERT INTO [dbo].[AspNetUsers] ([AccessFailedCount], [LockoutEnabled], [TwoFactorEnabled], [PhoneNumberConfirmed], [EmailConfirmed], [Id], [UserName], [PasswordHash], [SecurityStamp], [Email], [First], [Last], [Bio], [Twitter], CreatedAt) 
VALUES (N'0', N'true', N'false', N'true', N'true', N'2d07d0b7-86bd-46b1-89ab-0e71f0b6f122', N'shiftkey', N'AJ7cf6z0FoUd1/FElC/vBsoMwRKe5d3ojDNSCTh2mScdRKG9ZWHbPpminaWW+d4wyw==', N'13a2e24b-bf1e-4377-bdb2-a9a0bf1dd467', N'brendan.forster@github.com', N'Brendan', N'Forster', N'Developer at Github', N'shiftkey', '1/03/2011')
INSERT INTO [dbo].[AspNetUsers] ([AccessFailedCount], [LockoutEnabled], [TwoFactorEnabled], [PhoneNumberConfirmed], [EmailConfirmed], [Id], [UserName], [PasswordHash], [SecurityStamp], [Email], [First], [Last], [Bio], [Twitter], CreatedAt) 
VALUES (N'0', N'true', N'false', N'true', N'true', N'3f709e03-aa25-40f9-a49d-fd252c6fc0c7', N'jongalloway', N'AAoV4TEjKVcAL1TnykibFj1fHB3GkWX5wMQVfseyCpkA/WVrxiasqInEF9Gmkwr4pQ==', N'750613c8-9b79-4058-8568-dd2709d39c32', N'jongalloway@gmail.com', N'Jon', N'Galloway', N'Dance Instructor', N'jongalloway', '1/01/2001')
INSERT INTO [dbo].[AspNetUsers] ([AccessFailedCount], [LockoutEnabled], [TwoFactorEnabled], [PhoneNumberConfirmed], [EmailConfirmed], [Id], [UserName], [PasswordHash], [SecurityStamp], [Email], [First], [Last], [Bio], [Twitter], CreatedAt) 
VALUES (N'0', N'true', N'false', N'true', N'true', N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3', N'robconery', N'APAyawqXBIDGl/1lxMsCeL+ZBDZB3jPXsJc/pi5JOnsa0oTlYdXE9RclnLu8AbvfQw==', N'b35a0c3f-f8ab-451c-aa84-cdcd739425d4', N'robconery@gmail.com', N'Rob', N'Conery', N'CTO of Little Debbie Snackcakes', N'robconery', '4/12/2001')
INSERT INTO [dbo].[AspNetUsers] ([AccessFailedCount], [LockoutEnabled], [TwoFactorEnabled], [PhoneNumberConfirmed], [EmailConfirmed], [Id], [UserName], [PasswordHash], [SecurityStamp], [Email], [First], [Last], [Bio], [Twitter], CreatedAt) 
VALUES (N'0', N'true', N'false', N'true', N'true', N'49bbf69b-97e1-4712-99d5-43b59dfb5fdd', N'haacked', N'AK3qwd9cnOyKsFxr66xSSil9f/JF8zMn3fF5IVCq10BqBl6M7hIES26u2wlr/dAxNg==', N'689d6509-6a1f-40e9-a767-9d315315bb10', N'haacked@gmail.com', N'Phil', N'Haack', N'Developer at Github', N'haacked', '7/03/2006')
INSERT INTO [dbo].[AspNetUsers] ([AccessFailedCount], [LockoutEnabled], [TwoFactorEnabled], [PhoneNumberConfirmed], [EmailConfirmed], [Id], [UserName], [PasswordHash], [SecurityStamp], [Email], [First], [Last], [Bio], [Twitter], CreatedAt) 
VALUES (N'0', N'true', N'false', N'true', N'true', N'4a294b48-6806-48ee-9a55-84caa0dfb0ee', N'topfunky',  N'ACBGjz0hztgicBWl1g/GLZhJmLiXmzlyPdavPs1buARnyx/8IioCCw8oIcEy/PHmvQ==', N'24e80691-42f7-4d1a-af9b-c8ad2de37d33', N'boss@topfunky.com', N'Geoffrey', N'Grosenbach', N'VP of Stuff at Pluralsight', N'topfunky', '9/15/2009')
INSERT INTO [dbo].[AspNetUsers] ([AccessFailedCount], [LockoutEnabled], [TwoFactorEnabled], [PhoneNumberConfirmed], [EmailConfirmed], [Id], [UserName], [PasswordHash], [SecurityStamp], [Email], [First], [Last], [Bio], [Twitter], CreatedAt) 
VALUES (N'0', N'true', N'false', N'true', N'true', N'4d54557f-9bfc-412c-b4bb-7ef3058da98d', N'kscott', N'AOrbCYo1xZS3ygQpv7VFkoX2EIOG7M7jTp8js8vOfnoah3dW61GqaKGasMlhMJ6m+w==', N'38bfb42f-5be3-4357-aa41-204c183ff979', N'scott@odetocode.com', N'K. Scott', N'Galloway', N'Dance Instructor', N'jongalloway', '1/01/2001')
INSERT INTO [dbo].[AspNetUsers] ([AccessFailedCount], [LockoutEnabled], [TwoFactorEnabled], [PhoneNumberConfirmed], [EmailConfirmed], [Id], [UserName], [PasswordHash], [SecurityStamp], [Email], [First], [Last], [Bio], [Twitter], CreatedAt) 
VALUES (N'0', N'true', N'false', N'true', N'true', N'e4ba9f1a-0df2-426c-8879-7a694da74330', N'shanselman', N'AJsczY0LF6WqFfeWBqeEjiaHFmX1ENTH+5+4+JdGKYw/H1DrQqmX85cW99j/cxXd/g==', N'09de48ae-b0b7-4d82-9437-c3a59c5b123c', N'scott@hanselman.com', N'Scott', N'Hanselman', N'Community Lead at Microsoft', N'shanselman', '1/01/2001')

INSERT INTO [dbo].[AspNetUserNotes] (Note, EnteredBy, CreatedAt, User_Id) VALUES('Set as Admin', 'System', '12/01/2012', N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3')
INSERT INTO [dbo].[AspNetUserNotes] (Note, EnteredBy, CreatedAt, User_Id) VALUES('Changed Avatar due to complaint', 'System', '09/18/2013', N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3')
INSERT INTO [dbo].[AspNetUserNotes] (Note, EnteredBy, CreatedAt, User_Id) VALUES('Sent email regarding overpayment', 'System', '2/12/2014', N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3')

INSERT INTO [dbo].[AspNetUserLogs] (Entry, CreatedAt, User_Id) VALUES ('Logged In', '01/04/2013', N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3');
INSERT INTO [dbo].[AspNetUserLogs] (Entry, CreatedAt, User_Id) VALUES ('Logged Out','12/17/2012', N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3');
INSERT INTO [dbo].[AspNetUserLogs] (Entry, CreatedAt, User_Id) VALUES ('Logged In with Google', '04/08/2013', N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3');
INSERT INTO [dbo].[AspNetUserLogs] (Entry, CreatedAt, User_Id) VALUES ('Logged In Twitter', '03/02/2014', N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3');

INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'3a2f0df2-ca9d-49a3-bbc9-304bb82079a3', N'1');
