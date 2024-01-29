package com.ssafy.messageservice.db.entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name="Chat")
public class Chat {
    @Id
    @Column(length = 50)
    private String chatId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chatroomId", referencedColumnName = "chatroomId")
    private Chatroom chatroom;

    @Column
    private String content;

    @Column
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime sendTime;

    @Column(length = 50)
    private String userId;

    // todo : 추가하고 싶은 부분
    @Column(length = 20)
    private String nickname;

    @Column
    private String profileUrl;
    // 끝
}