<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ApiResource]
class Intervention
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Appointment::class)]
    private $appointment;

    #[ORM\ManyToOne(targetEntity: Plumber::class)]
    private $plumber;

    #[ORM\Column(type: 'string', length: 255)]
    private $status;

    #[ORM\Column(type: 'text', nullable: true)]
    private $notes;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $rating;

    // Getters and setters...
}